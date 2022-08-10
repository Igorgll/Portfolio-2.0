import * as style from "./styles";
import { MotionConfig } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { GiBookshelf, GiSkills } from "react-icons/gi";
import { RiMacbookLine } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { CgFileDocument, CgProfile } from "react-icons/cg";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import folder from "../../assets/folder.png";

  // const [repos, setRepos] = useState<Repo[]>([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${user}/repos`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const repositories = [data[1], data[3], data[5], data[13], data[24]];
  //       setRepos(repositories);
  //     });
  // }, []);

  // interface Repo {
  // name: string;
//   description: string;
//   html_url: string;
//   homepage: string;
// }

// const user = "igorgll";

export default function Folder() {
  const renderNavLinks = () => {
    return (
      <>
        <ul className="folder_links">
          <li>
            <CgProfile />
            About me
          </li>
          <li>
            <GiBookshelf />
            Education
          </li>
          <li>
            <GiSkills />
            Skills
          </li>
          <li>
            <RiMacbookLine />
            Projects
          </li>
          <li>
            <FaRegAddressBook />
            Resume
          </li>
          <li>
            <IoShareSocialSharp />
            Socials
          </li>
        </ul>
      </>
    );
  };

  function About_me() {
    return (
      <>
        <h1>About me component</h1>
      </>
    );
  }

  function Education() {
    return (
      <>
        <h1>Education component</h1>
      </>
    );
  }

  function Skills() {
    return (
      <>
        <h1>Skills component</h1>
      </>
    );
  }

  function Projects() {
    return (
      <>
        <h1>Projects component</h1>
      </>
    );
  }

  function Resume() {
    return (
      <>
        <h1>Resume component</h1>
      </>
    );
  }

  function Socials() {
    return (
      <>
        <h1>Socials component</h1>
      </>
    );
  }

  return (
    <style.folder>
      <div className="folder_window">
        <BsFillCircleFill style={{ color: "var(--red)" }} />
        <BsFillCircleFill style={{ color: "var(--orange)" }} />
        <BsFillCircleFill style={{ color: "var(--green)" }} />
      </div>

      <div className="folder_body">
        <div className="left_handside">{renderNavLinks()}</div>
        <div
          className="explorer_content"
          style={{ background: "var(--folder-dark)", padding: "20px" }}
        ></div>
      </div>
    </style.folder>
  );
}
