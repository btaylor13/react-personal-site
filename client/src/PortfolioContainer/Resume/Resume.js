import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-subheading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-code-btn">
          <span>{props.codeLink ? props.codeLink : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML/CSS" },
    { skill: "JavaScript" },
    { skill: "Bootstrap" },
    { skill: "jQuery" },
    { skill: "React JS" },
    { skill: "React Native" },
    { skill: "Git" },
    { skill: "Github" },
    { skill: "PHP Basics" },
    { skill: "Wordpress Basics" },
    { skill: "Figma" },
    { skill: "Stack Overflow" },
  ];

  const projectsDetails = [
    {
      title: "React Personal Website",
      duration: { fromDate: "Nov. 2021", toDate: "Nov. 2021" },
      description:
        "A personal portfolio website to showcase resume and skills and to later use to host portfolio projects",
      subHeading: "Technologies Used: React JS",
      codeLink: (
        <div className="project-links">
          <a
            className="code-link"
            href="https://github.com/btaylor13/react-personal-site"
          >
            View Code
          </a>

          <a
            className="code-link site-link"
            href="https://bridgett-taylor.netlify.app/"
          >
            View Site
          </a>
        </div>
      ),
    },
    {
      title: "Space Tourism Website",
      duration: { fromDate: "Oct. 2021", toDate: "Nov.2021" },
      description:
        "A multi-page informational site for space tourism built from a Figma design file",
      subHeading: "Technologies Used: HTML, CSS, JavaScript, Figma",
      codeLink: (
        <div className="project-links">
          <a
            className="code-link"
            href="https://github.com/btaylor13/space-tourism-FEM"
          >
            View Code
          </a>
          <a
            className="code-link site-link"
            href="https://btaylor13.github.io/space-tourism-FEM/"
          >
            View Site
          </a>
        </div>
      ),
    },
    {
      title: "Pacific Northwest Adventures Website",
      duration: { fromDate: "May 2021", toDate: "June 2021" },
      description:
        "A multi-page website advertising outdoor adventures in the PNW region",
      subHeading: "Technologies Used: HTML, CSS, Bootstrap",
      codeLink: (
        <div className="project-links">
          <a
            className="code-link"
            href="https://github.com/btaylor13/pnw-adventures-update"
          >
            View Code
          </a>
          <a
            className="code-link site-link"
            href="https://btaylor13.github.io/pnw-adventures-update/"
          >
            View Site
          </a>
        </div>
      ),
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Nucamp Frontend Web Development Bootcamp"}
        subHeading={"Certificate"}
        fromDate={"April 2021"}
        toDate={"Aug. 2021"}
      />

      <ResumeHeading
        heading={"Hardin-Simmons University - Abilene, TX"}
        subHeading={"Bachelor of Applied Science in Education"}
        fromDate={"Aug 2016"}
        toDate={"Dec 2018"}
      />

      <ResumeHeading
        heading={"Jones College - Ellisville, MS"}
        subHeading={"Associates in Liberal Arts"}
        fromDate={"Aug 2013"}
        toDate={"Dec 2015"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Abilene and Wylie ISD"}
          subHeading={"Educator in Maths and English as Second Language"}
          fromDate={"Dec. 2018"}
          toDate={"Apr. 2021"}
        />

        <div className="experience-description">
          <p className="resume-description-text">
            - Managed multiple projects simultaneously while recognizing
            interests of all stakeholders and finding mutually beneficial
            solutions
          </p>

          <p className="resume-description-text">
            - Collaborated with a team of educators to create a new elementary
            maths curriculum that incorporated more technology and the latest
            research on how students learn maths to high levels to serve more
            than 1,200 fifth grade students and 25 educators across the district
          </p>

          <p className="resume-description-text">
            - Delivered data-driven and research-based instruction to create
            engaging, memorable, and active learning experiences for a variety
            of linguistic and socioeconomic backgrounds
          </p>
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"Abilene Public Library - Abilene, TX"}
          subHeading={"Library Assistant"}
          fromDate={"Nov. 2016"}
          toDate={"June 2019"}
        />

        <div className="experience-description">
          <p className="resume-description-text">
            - Problem-solved and supported guests in research and basic computer
            skills as well as assisted guests in creating resumes and submitting
            job applications
          </p>

          <p className="resume-description-text">
            - Collaborated with other staff members to design and offer new
            learning experiences and programs for our guests
          </p>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          codeLink={projectsDetails.codeLink}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Puzzles and Games"
        description="My love of coding stems from my lifelong love of puzzles and mystery games. I especially like the mystery subscription boxes that send realistic-looking clues like ones you might find in an escape room to solve mysteries. There's something so satisfying about finding and musing over a problem until it's solved."
      />
      <ResumeHeading
        heading="Learning"
        description="I enjoy learning new things. Whether it's new skills, hobbies, or just interesting facts about how the world works, I get thrills from it all. Last year, I learned how to build very basic bookcases because I needed some for my former classroom. I made three bookcases, and I set them up in the order that I made them. Seeing the progress I made visually from left to right made me realize why I enjoy learning so much. There's no limit to how much we can grow and learn. There's always something we can improve and work towards in every aspect of life, and that's exciting. I also spend a lot of free time reading, listening to TED Talks, and watching all the National Geographic shows on Disney Plus."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 513;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
