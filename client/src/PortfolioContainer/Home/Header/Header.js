import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="profile-container">
      <div className="profile__icons-container">
        <div className="profile__icons"></div>
      </div>
      {/* Details */}

      <h1 className="profile__details-name">
        Hello, I'm <span className="highlighted-text">Bridgett</span>
      </h1>

      <div className="profile-details-info">
        <h2 className="profile-role">Front End Developer</h2>
        <p className="profile-role-tagline">Based in Spokane, WA</p>
      </div>
      {/* Buttons */}
      <div className="profile-buttons">
        <button className="btn primary-btn">Say Hello</button>
        <a
          href="https://docs.google.com/document/d/1OfKghLXsFd_o6gLCbaiDkqKJVYUuwGd7CqPFJcrkm_w/edit?usp=sharing"
          target="_blank"
          className="btn highlighted-btn"
        >
          Get Resume
        </a>
      </div>
    </div>
  );
}
