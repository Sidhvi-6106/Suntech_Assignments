import { useState } from "react";
import { useState } from "react";

function FormDemo() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [users, setUser] = useState([]);

  //form submission
  const submitForm = (obj) => {

    //the date is not after 2020
    setError("dob",{
        type:"manual",
        message:"the date not after 2020"
    })
    // { errors.dob?.type==="manual" && <p>{error.dob.message}</p>}

    //update  users state
    setUser([...users, obj]);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <input
            type="text"
            {...register("username", { required: true, minLength: 3 })}
            placeholder="Username"
            className="border-2"
          />
          {errors.username?.type === "required" && <p className="text-red-500">Username required</p>}
          {errors.username?.type === "minLength" && <p className="text-red-500">Min length shd be 3</p>}
        </div>

        <div className="mb-3">
          <input type="email" {...register("email")} placeholder="Email" className="border-2" />
        </div>
        <button type="submit" className="bg-blue-400 p-3 text-lime-100">
          Login
        </button>
      </form>

      {/* table */}
      <h1>List of Users</h1>
      <table className="max-w-4xl bg-white border border-gray-200 mx-auto">
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            <th className="px-6 py-3 text-left">Username</th>
            <th className="px-6 py-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {users.map((userObj) => (
            <tr>
              <td class="px-6 py-4">{userObj.username}</td>
              <td class="px-6 py-4">{userObj.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default FormDemo;

//{  username:"",email:""}

//required
//minLength & maxLength
//min & max
//pattern

//user={ username:"ravi"}    user.city

// condition ? react el-1 : react el-2    if-else
//condition  && react elm   if

//{username :{ type:"",message:""}}