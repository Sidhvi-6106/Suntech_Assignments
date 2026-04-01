import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiFetch } from "../lib/api";

function UsersList() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        setError(null);
        let res = await apiFetch("/users", {
          method: "GET",
        });

        if (res.status === 200) {
          let resObj = await res.json();
          setUsers(resObj.payload);
        } else {
          const errorResponse = await res.json().catch(() => null);
          throw new Error(errorResponse?.message || "Unable to load users");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);


  //go to user
  const gotoUser = (userObj) => {
    navigate(`/user/${userObj._id}`, { state: { user: userObj } });
  };

  if (loading) {
    return <p className="text-center text-orange-400 text-3xl">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl">{error.message}</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-gray-600">List of Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {users?.map((userObj) => (
          <div key={userObj.email} className="p-10 shadow-2xl cursor-pointer" onClick={()=>gotoUser(userObj)}>
            <p className="text-3xl">{userObj.name}</p>
            <p className="text-2xl">{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
