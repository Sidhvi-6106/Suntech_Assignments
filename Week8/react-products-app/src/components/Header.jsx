import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-between px-10 items-center bg-gray-300'>
      {/* logo */}
      <img
        width="80px"
        className='p-2'
        src="https://img.freepik.com/premium-vector/online-shop-e-commerce-logo_1199645-37307.jpg?semt=ais_user_personalization&w=740&q=80"
        alt="logo"
      />
      <ul className='flex gap-10'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">ProductsList</NavLink>
        </li>
        <li>
          <NavLink to="/contact">ContactUs</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;