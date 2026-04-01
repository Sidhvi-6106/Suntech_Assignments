import { NavLink } from 'react-router';

function Header() {
  const navLinkClassName = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-200'
    }`;

  return (
    <header className='border-b border-slate-200 bg-white/90 backdrop-blur'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-500'>
            React Store
          </p>
          <h1 className='text-2xl font-bold text-slate-950'>Products App</h1>
        </div>
        <nav>
          <ul className='flex flex-wrap gap-3'>
            <li>
              <NavLink to='/' className={navLinkClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/products' className={navLinkClassName}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={navLinkClassName}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
