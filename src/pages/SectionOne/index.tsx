import * as style from "./styles";
import Navbar from "../../components/Navbar";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

//TEXTS
const introduction =
  "I like to build interactive and responsive web applications using React, and JavaScript based libraries.";

export const SectionOne = () => {
  return (
    <style.SectionOne>
      <div className="content">
        <div className="aside_nav">
          <Navbar />
        </div>
        <div>
          <div className="welcome_text">
            <h1>Igor Lima</h1>
            <p>{introduction}</p>
            <ul className="social_media_icons">
              <BsGithub />
              <BsLinkedin />
              <BsInstagram />
            </ul>
          </div>
        </div>
      </div>
    </style.SectionOne>
  );
};

export default SectionOne;
