import React from "react";

import MainImage from "../images/eiji_side.jpg";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <img
          src={MainImage}
          alt='Side profile of Eiji'
          style={{ width: "200px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
