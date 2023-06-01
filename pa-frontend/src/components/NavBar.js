import React from "react";
import { Link } from "react-router-dom";
import { useUserValue } from "./contexts/UserContext";
import { useNotificationDispatch } from "./contexts/NotificationContext";

const NavBar = ({ handleLogout, user }) => {
  const userValue = useUserValue();
  const notificationDispatch = useNotificationDispatch();

  const noUserFound = () => {
    if (userValue === null) {
      notificationDispatch({
        message: `Please login first before you create a ticket.`,
        type: "error",
      });
    }
  };

  const noUserSection = () => {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/users/register'>Register</Link>
      </div>
    );
  };

  const userSection = () => {
    return (
      <div>
        <p>Current User: {user.username} </p>
        <Link onClick={handleLogout}>Logout</Link>
      </div>
    );
  };

  return (
    <div>
      <nav>
        <div>
          <div>Phantom Agency</div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/requests/new' onClick={noUserFound}>
              Submit a Ticket
            </Link>
            <Link to='/tickets'>All Tickets</Link>
          </div>
          {userValue === null && noUserSection()}
          {userValue !== null && userSection()}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
