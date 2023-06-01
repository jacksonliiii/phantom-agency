import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import CareersPage from "./pages/careers";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

// import { useUserValue } from "./components/contexts/UserContext";

const App = () => {
  return (
    <div className='container'>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/careers' element={<CareersPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
