import * as style from "./styles";
import Navbar from "../../components/Navbar";
import computer from "../../assets/monitor_illustration_2.svg";
import wavingHand from "../../assets/waving-hand_1f44b.png";
import Hi from "../../assets/hiImIgor.png";
import NavToggle from '../../components/NavToggle';

const introduction =
  "I like to build interactive and responsive web applications using React, and JavaScript based libraries.";

const SectionOne = () => {
  return (
    <style.SectionOne>
      <Navbar />

      <div className="content">
        <div className="col-left">
          <img src={computer} alt="Computer pic" />
        </div>

        <div className="col-right">
          <span>
            <img src={Hi} alt="Hi I'm igor" id="Hi" />{" "}
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
      <NavToggle />
    </style.SectionOne>
  );
};

export default SectionOne;
