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
      let res = await apiFetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
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
    <div className="text-center">
      <h1 className="text-5xl text-gray-600">Add New User</h1>
      <form onSubmit={handleSubmit(onUserCreate)} className="max-w-96 mx-auto mt-10">
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mb-5 border w-full text-2xl"
          placeholder="Name"
        />
        {errors.name && <p className="mb-4 text-left text-red-500">{errors.name.message}</p>}
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="mb-5 border w-full text-2xl"
          placeholder="Email"
        />
        {errors.email && <p className="mb-4 text-left text-red-500">{errors.email.message}</p>}
        <input
          type="date"
          {...register("dateOfBirth", { required: "Date of birth is required" })}
          className="mb-5 border w-full text-2xl"
          placeholder="Date of birth"
        />
        {errors.dateOfBirth && <p className="mb-4 text-left text-red-500">{errors.dateOfBirth.message}</p>}
        <input
          type="number"
          {...register("mobileNumber")}
          className="mb-5 border w-full text-2xl"
          placeholder="Mobile number"
        />
        <button type="submit" className="text-2xl bg-lime-400 text-lime-50 px-8 py-4">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
