import * as style from "./styles";
import { motion } from "framer-motion";
import Folder from "../../components/Folder";
import { useRef } from "react";

const AboutMeSection = () => {
  const constraintsRef = useRef(null);
  return (
    <style.aboutMeSection ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        whileTap={{ cursor: "grabbing" }}
      >
        <Folder />
      </motion.div>
    </style.aboutMeSection>
  );
};

export default AboutMeSection;
