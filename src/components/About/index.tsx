import * as style from "./styles";
import handsome from "../../assets/handsome.jpg";

const About = () => {
  return (
    <style.aboutIgor>
      <img src={handsome} alt="Picture of me" />

      <p style={{marginTop: "15px"}}>
        My name's <span>Igor Lima</span>
      </p>
      <p>
        and I'm a <span>Front End Developer</span>
      </p>
      {/* <p style={{width: "700px", marginTop: "15px"}}>
        I first started my adventure in programming when I had the opportunity
        to study Software Engineering in the US in 2021.
      </p> */}
    </style.aboutIgor>
  );
};

export default About;
