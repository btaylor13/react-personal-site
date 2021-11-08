import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

export default function Navbar() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showNavbarOptions, setShowNavbarOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getNavbarOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getNavbarOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const getNavbarOptionsClasses = (index) => {
    let classes = "navbar-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "navbar-option-separator ";

    if (selectedScreen === index) classes += "selected-navbar-option ";
    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowNavbarOptions(false);
  };

  return (
    <div
      className="navbar-container"
      onClick={() => setShowNavbarOptions(!showNavbarOptions)}
    >
      <div className="navbar-parent">
        <div
          className="navbar-hamburger"
          onClick={() => setShowNavbarOptions(!showNavbarOptions)}
        >
          <FontAwesomeIcon className="navbar-hamburger-bars" icon={faBars} />
        </div>
        <div className="navbar-logo">
          <span>Bridgett</span>
        </div>
        <div
          className={
            showNavbarOptions
              ? "navbar-options show-hamburger-options"
              : "navbar-options"
          }
        >
          {getNavbarOptions()}
        </div>
      </div>
    </div>
  );
}
