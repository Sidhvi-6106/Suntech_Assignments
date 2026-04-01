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
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS origin is not allowed"));
    },
  }),
);
app.use(exp.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use("/user-api", UserApp);

if (process.env.NODE_ENV === "production") {
  app.use(exp.static(frontendDistPath));

  app.get(/^(?!\/user-api|\/health).*/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

app.use((err, req, res, next) => {
  console.log("err is ", err);

  if (err.message === "CORS origin is not allowed") {
    return res.status(403).json({ message: err.message });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

async function connectDB() {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL is missing");
    }

    await connect(process.env.DB_URL);
    console.log("Connected to DB");
    app.listen(port, () => console.log(`Server on port ${port}`));
  } catch (err) {
    console.log("err in DB connection :", err);
  }
}

connectDB();
