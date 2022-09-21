import * as style from "./styles";
import Navbar from "../../components/Navbar";
import computer from "../../assets/monitor_illustration_2.svg";
import wavingHand from "../../assets/waving-hand_1f44b.png";
import MobileNav from "../../components/MobileNav";
import Navigation from "../../components/Navigation";

//TEXTS
const introduction =
  "I like to build interactive and responsive web applications using React, and JavaScript based libraries.";

export const SectionOne = () => {
  return (
    <style.SectionOne>
      <Navbar />

      <div className="content">
        <div className="col-left">
          <img src={computer} alt="Computer pic" />
        </div>

        <div className="col-right">
          <span>
            <h4>Hi, I'm Igor</h4>
            <img
              src={wavingHand}
              width="60px"
              id="waving_hand"
              alt="Waving hand icon"
            />{" "}
          </span>
          <h1>{introduction}</h1>
        </div>
      </div>
      <MobileNav />
    </style.SectionOne>
  );
};

export default SectionOne;
