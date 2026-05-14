import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between px-10 items-center bg-slate-800/80 backdrop-blur-md py-4 shadow-lg border-b border-slate-700 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/30">
          U
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
          UserManage
        </span>
      </div>
      <ul className="flex gap-2 text-lg font-medium">
        <li>
          <NavLink to="" className={({ isActive }) => (isActive ? "bg-slate-700 text-cyan-400 rounded-lg px-4 py-2 transition-all" : "text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-4 py-2 transition-all")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) => (isActive ? "bg-slate-700 text-cyan-400 rounded-lg px-4 py-2 transition-all" : "text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-4 py-2 transition-all")}
          >
            Add User
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users-list"
            className={({ isActive }) => (isActive ? "bg-slate-700 text-cyan-400 rounded-lg px-4 py-2 transition-all" : "text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-4 py-2 transition-all")}
          >
            Users List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;