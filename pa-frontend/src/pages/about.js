import React from "react";
import squareImage from "../images/eiji_side.jpg";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About</h2>
      <div className="about-content">
        <img className="about-image" src={squareImage} alt="Main character square" />
        <p className="about-description">
          Hello there! My name is Jackson, and this is my small web app dedicated to my fictional universe.
          In this world, dangerous phantoms roam freely, while brave individuals must take on perilous missions as exorcists.
        </p>
        <p className="about-links">
          If you'd like to explore more, feel free to check out my{" "}
          <a
            href="https://github.com/jacksonliiii"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            GitHub
          </a>{" "}
          for other projects and the code behind this web app. Additionally, you can find artwork and visual representations of this world on my{" "}
          <a
            href="https://instagram.com/wasabiiwooman"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Instagram
          </a>{" "}
          page.
        </p>
        <p className="about-spacing">
          To submit a ticket, you must register an account first. After that, simply follow the instructions to create a ticket
          and your ticket will be shown in 'All Tickets'.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
