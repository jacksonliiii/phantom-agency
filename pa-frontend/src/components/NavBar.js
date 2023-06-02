import React from "react";
import { Link } from "react-router-dom";
import { useUserValue } from "./contexts/UserContext";
import { useNotificationDispatch } from "./contexts/NotificationContext";
import ghostIcon from "../images/ghost.png";

const NavBar = ({ handleLogout, user }) => {
  const userValue = useUserValue();
  const notificationDispatch = useNotificationDispatch();

  const noUserFound = () => {
    if (userValue === null) {
      notificationDispatch({
        message: `Please login first before you create a ticket.`,
        type: "warning",
      });
    }
  };

  const noUserSection = () => {
    return (
      <div>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
        <Link to='/users/register' className='nav-link'>
          Register
        </Link>
      </div>
    );
  };

  const userSection = () => {
    return (
      <div className='flex items-center'>
        <p className='current-user mt-2'>{user.username} logged in</p>
        <Link onClick={handleLogout} className='nav-link ml-2'>
          Logout
        </Link>
      </div>
    );
  };

  return (
    <div>
      <nav className='navbar shadow'>
        <div className='navbar-brand'>
          <img src={ghostIcon} className='navbar-icon' alt='ghost icon' />
          <p className='nav-title'>Phantom Agency</p>
        </div>
        <div className='navbar-links'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/careers' className='nav-link'>
            Careers
          </Link>
          <Link to='/about' className='nav-link'>
            About
          </Link>
          <Link to='/requests/new' onClick={noUserFound} className='nav-link'>
            Submit a Ticket
          </Link>
          <Link to='/tickets' className='nav-link'>
            All Tickets
          </Link>
        </div>
        {userValue === null && noUserSection()}
        {userValue !== null && userSection()}
      </nav>
    </div>
  );
};

export default NavBar;
