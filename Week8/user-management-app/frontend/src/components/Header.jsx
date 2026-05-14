import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between px-10 items-center bg-black/80 backdrop-blur-md py-4 border-b border-neutral-800 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold text-xl">
          U
        </div>
        <span className="text-2xl font-bold text-white tracking-tight">
          UserManage
        </span>
      </div>
      <ul className="flex gap-2 text-lg font-medium">
        <li>
          <NavLink to="" className={({ isActive }) => (isActive ? "bg-white text-black rounded-lg px-4 py-2 transition-all" : "text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg px-4 py-2 transition-all")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) => (isActive ? "bg-white text-black rounded-lg px-4 py-2 transition-all" : "text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg px-4 py-2 transition-all")}
          >
            Add User
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users-list"
            className={({ isActive }) => (isActive ? "bg-white text-black rounded-lg px-4 py-2 transition-all" : "text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg px-4 py-2 transition-all")}
          >
            Users List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;