import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { apiFetch } from "../lib/api";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();

  //form submit
  const onUserCreate = async (newUser) => {
    setError(null);
    setLoading(true);

    try {
      const payload = { ...newUser };
      if (payload.mobileNumber === "") {
        delete payload.mobileNumber;
      } else if (payload.mobileNumber) {
        payload.mobileNumber = Number(payload.mobileNumber);
      }

      let res = await apiFetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 201) {
        navigate("/users-list");
      } else {
        const errorResponse = await res.json().catch(() => null);
        throw new Error(errorResponse?.message || "Unable to create user");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-orange-400 text-3xl"> Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl"> {error.message}</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center">Add New User</h1>
        <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-slate-500"
              placeholder="Full Name"
            />
            {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-slate-500"
              placeholder="Email Address"
            />
            {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="date"
              {...register("dateOfBirth", { required: "Date of birth is required" })}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-slate-500 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
            />
            {errors.dateOfBirth && <p className="mt-2 text-sm text-red-400">{errors.dateOfBirth.message}</p>}
          </div>
          <div>
            <input
              type="number"
              {...register("mobileNumber")}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-slate-500"
              placeholder="Mobile Number (Optional)"
            />
          </div>
          <button type="submit" className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/30 transition-all transform hover:-translate-y-1">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
