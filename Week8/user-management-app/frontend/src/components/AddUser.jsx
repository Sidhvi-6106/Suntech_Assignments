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
      <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Add New User</h1>
        <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-neutral-500"
              placeholder="Full Name"
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-neutral-500"
              placeholder="Email Address"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="date"
              {...register("dateOfBirth", { required: "Date of birth is required" })}
              className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-neutral-500 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
            />
            {errors.dateOfBirth && <p className="mt-2 text-sm text-red-500">{errors.dateOfBirth.message}</p>}
          </div>
          <div>
            <input
              type="number"
              {...register("mobileNumber")}
              className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-neutral-500"
              placeholder="Mobile Number (Optional)"
            />
          </div>
          <button type="submit" className="w-full mt-4 bg-white hover:bg-neutral-200 text-black font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
