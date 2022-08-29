import * as style from "./styles";
import { BsFillCircleFill } from "react-icons/bs";
import { GiBookshelf, GiSkills } from "react-icons/gi";
import { RiMacbookLine } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";
import About from "../About";
import Education from "../Education";
import Skills from "../Skills";
import Projects from "../Projects";
import Resume from "../Resume";
import Socials from "../Socials";

export default function Folder() {
  //NOT A PRACTICAL WAY TO RENDER SELECTED COMPONENTS
  //TO DO: FIND A BETTER WAY TO DO THIS
  const [aboutMe, setAboutMe] = useState(true);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [resume, setResume] = useState(false);
  const [socials, setSocials] = useState(false);

  const aboutHandler = () => {
    setAboutMe(true);
  };

  const educationHandler = () => {
    setEducation(true);
    setAboutMe(false);
  };

  const skillsHandler = () => {
    setEducation(false);
    setAboutMe(false);
    setSkills(true);
  };

  const projectsHandler = () => {
    setEducation(false);
    setAboutMe(false);
    setSkills(false);
    setProjects(true);
  };

  const resumeHandler = () => {
    setEducation(false);
    setAboutMe(false);
    setSkills(false);
    setProjects(false);
    setResume(true);
  };

  const socialsHandler = () => {
    setEducation(false);
    setAboutMe(false);
    setSkills(false);
    setProjects(false);
    setResume(false);
    setSocials(true);
  };

  const renderNavLinks = () => {
    return (
      <>
        <ul className="folder_links">
          <li onClick={aboutHandler}>
            <CgProfile />
            About me
          </li>
          <li onClick={educationHandler}>
            <GiBookshelf />
            Education
          </li>
          <li onClick={skillsHandler}>
            <GiSkills />
            Skills
          </li>
          <li onClick={projectsHandler}>
            <RiMacbookLine />
            Projects
          </li>
          <li onClick={resumeHandler}>
            <FaRegAddressBook />
            Resume
          </li>
          <li onClick={socialsHandler}>
            <IoShareSocialSharp />
            Socials
          </li>
        </ul>
      </>
    );
  };

  return (
    <style.folder>
      <div className="folder_window">
        <BsFillCircleFill style={{ color: "var(--dark)" }} />
        <BsFillCircleFill style={{ color: "var(--dark)" }} />
        <BsFillCircleFill style={{ color: "var(--dark)" }} />
      </div>

      <div className="folder_body">
        <div className="left_handside">{renderNavLinks()}</div>
        <div
          className="explorer_content"
          style={{ background: "var(--folder-dark)", padding: "20px" }}
        >
          {(aboutMe && <About />) ||
            (education && <Education />) ||
            (skills && <Skills />) ||
            (projects && <Projects />) ||
            (resume && <Resume />) ||
            (socials && <Socials />)}
        </div>
      </div>
    </style.folder>
  );
}
