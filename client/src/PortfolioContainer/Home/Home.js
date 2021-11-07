import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Navbar />
      <Header />
    </div>
  );
}
