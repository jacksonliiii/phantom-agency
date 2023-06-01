import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import { UserIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <nav className='bg-gray-950 shadow w-full'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-[0]'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center flex-grow'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/about' className='nav-link ml-6'>
              About
            </Link>
            <Link to='/careers' className='nav-link ml-6'>
              Careers
            </Link>
          </div>
          <div className='flex items-center'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
            <Link to='/register' className='nav-link ml-4'>
              Register
            </Link>
            <button className='dropdown-button ml-4'>
              <UserIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
