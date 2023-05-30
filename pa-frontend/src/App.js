import React from "react";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";

import Login from "./components/Login";

const App = () => {
  return (
    <div className='container'>
      <Login />
    </div>
  );
};

export default App;
