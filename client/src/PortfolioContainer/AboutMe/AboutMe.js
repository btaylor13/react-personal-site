import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./AboutMe.css";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Hello! I'm Bridgett, and I'm a frontend developer living in Spokane, WA. I enjoy building beautiful websites using HTML, CSS, and JavaScript. I especially enjoy collaborating with others and working towards common goals. I'm seeking a junior frontend developer position where I can contribute meaningfully and grow alongside of a team. One of the most exciting things about web development for me is that there is always more to learn, and I would love the opportunity to work alongside a team that feels the same way. I recently graduated from Nucamp's Frontend Coding Bootcamp, and I'd love for you to check out my portfolio projects to see if I might be a good fit for your company. When I'm not coding, I'm usually spending time with friends and family, reading, learning new skills and trying new things. Right now, I'm learning pottery wheel basics and how to track and photograph the Aurora Borealis.",
    skills: {
      bullets: [
        "HTML, CSS, and Javascript",
        "Responsive Web Design",
        "Bootstrap",
        "Jquery",
        "React",
        "Figma",
        "Git",
        "Github",
        "Wordpress Basics",
        "PHP Basics",
        "Stack Overflow",
      ],
      heading: "My Skills and Tools",
    },
  };

  const renderSkills = () => {
    return SCREEN_CONSTANTS.skills.bullets.map((value, i) => (
      <div className="skills" key={i}>
        <div className="skill-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-skills">
              <div className="skills-heading">
                <span>{SCREEN_CONSTANTS.skills.heading}</span>
              </div>
              {renderSkills()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Contact Me
              </button>
              <a
                href="https://docs.google.com/document/d/1OfKghLXsFd_o6gLCbaiDkqKJVYUuwGd7CqPFJcrkm_w/edit?usp=sharing"
                target="_blank"
                className="btn highlighted-btn"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
