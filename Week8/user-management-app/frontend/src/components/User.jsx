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
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-cyan-500/30">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{user?.name}</h1>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">Active User</span>
            </div>
          </div>
          
          <div className="space-y-6 bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Address</p>
                <p className="text-lg text-slate-200">{user?.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Date of Birth</p>
                <p className="text-lg text-slate-200">{user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : "N/A"}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Mobile Number</p>
                <p className="text-lg text-slate-200">{user?.mobileNumber || "Not Provided"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
