import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { apiFetch } from "../lib/api";

function User() {
  let { id } = useParams();
  let { state } = useLocation();
  let [user, setUser] = useState(state?.user || null);
  let [loading, setLoading] = useState(!state?.user);
  let [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      return;
    }

    async function getUser() {
      try {
        let res = await apiFetch(`/users/${id}`, {
          method: "GET",
        });

        if (res.status === 200) {
          let resObj = await res.json();
          setUser(resObj.payload);
        } else {
          const errorResponse = await res.json().catch(() => null);
          throw new Error(errorResponse?.message || "Unable to load user");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [id, user]);

  if (loading) {
    return <p className="text-center text-orange-400 text-3xl">Loading user...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl">{error.message}</p>;
  }

  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "N/A"}</p>
      <p>{user?.mobileNumber || "N/A"}</p>
    </div>
  );
}

export default User;
