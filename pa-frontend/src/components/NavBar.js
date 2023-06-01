import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import { UserIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <nav className="w-full bg-gray-950 shadow">
      <div className="mx-auto min-w-[0] px-4 flex justify-around items-center">
        <div className="title">Phantom Agency</div>
        <div className="flex">
          <Link to="/" className="nav-link mr-6">
            Home
          </Link>
          <Link to="/about" className="nav-link mx-4">
            About
          </Link>
          <Link to="/careers" className="nav-link mx-4">
            Careers
          </Link>
          <Link to="/requests/new" className="nav-link mx-4">
            Submit a Ticket
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/login" className="nav-link mx-2">
            Login
          </Link>
          <Link to="/register" className="nav-link mx-2">
            Register
          </Link>
          <button className="dropdown-button mx-2">
            <UserIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
