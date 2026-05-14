import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { UserApp } from "./APIs/UserAPI.js";

config();

const app = exp();
const port = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.join(__dirname, "..", "frontend", "dist");

// Improved Origin Logic: Fallback to common dev ports if env is missing
const allowedOrigins = process.env.CLIENT_ORIGIN 
  ? process.env.CLIENT_ORIGIN.split(",").map(o => o.trim()) 
  : ["http://localhost:5173", "http://localhost:5175", "http://localhost:3000"];

app.set("trust proxy", 1);

// Simplified CORS for reliability
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl) 
      // or if the origin is in our allow list
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS origin is not allowed"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(exp.json());

// Routes
app.use("/user-api", UserApp);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Production Static Files
if (process.env.NODE_ENV === "production") {
  app.use(exp.static(frontendDistPath));

  app.get(/^(?!\/user-api|\/health).*/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error Log:", err);

  if (err.message === "CORS origin is not allowed") {
    return res.status(403).json({ message: err.message });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "Validation failed", errors: err.errors });
  }

  if (err.code === 11000) {
    return res.status(409).json({ message: "User or data already exists" });
  }

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

async function connectDB() {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL is missing in .env file");
    }

    await connect(process.env.DB_URL);
    console.log("✅ Connected to MongoDB");
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1); // Stop server if DB fails
  }
}

connectDB();