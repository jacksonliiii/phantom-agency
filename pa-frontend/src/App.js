import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import CareersPage from "./pages/careers";
import Tickets from "./components/Tickets";
import Ticket from "./components/Ticket";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Notification from "./components/Notification";

import {
  useUserValue,
  useUserDispatch,
} from "./components/contexts/UserContext";
import { useNotificationDispatch } from "./components/contexts/NotificationContext";

import ticketService from "./services/ticket";

const App = () => {
  const userValue = useUserValue();
  const userDispatch = useUserDispatch();
  const notificationDispatch = useNotificationDispatch();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      userDispatch(user);
      ticketService.setToken(user.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      window.localStorage.removeItem("loggedUser");
      ticketService.setToken("");
      userDispatch(null);
      notificationDispatch({
        message: `Logged out of ${userValue.username}`,
        type: "success",
      });
    } catch (error) {
      notificationDispatch({
        message: error,
        type: "error",
      });
    }
  };

  return (
    <div className='container'>
      <Notification />
      <Router>
        <div>
          <NavBar handleLogout={handleLogout} user={userValue} />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/careers' element={<CareersPage />} />
            <Route
              path='/requests/new'
              element={
                userValue ? <Ticket /> : <Navigate replace to='/login' />
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/users/register' element={<Register />} />
            <Route path='/tickets' element={<Tickets />} />
          </Routes>
        </div>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
