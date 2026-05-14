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
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-white">Users Directory</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users?.map((userObj) => (
          <div key={userObj.email} onClick={() => gotoUser(userObj)} className="group bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-500 transition-all cursor-pointer transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl">
                {userObj.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{userObj.name}</h2>
            <p className="text-neutral-400 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              {userObj.email}
            </p>
          </div>
        ))}
      </div>
      {users?.length === 0 && (
        <div className="text-center py-20 bg-neutral-900 rounded-2xl border border-neutral-800 border-dashed">
          <p className="text-neutral-500 text-xl mb-4">No users found</p>
        </div>
      )}
    </div>
  );
}

export default UsersList;
