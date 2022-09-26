import * as style from "./styles";
import { motion, MotionConfig } from "framer-motion";

const Navigation = () => {
  return (
    <style.Navigation className={`navigation`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <ul>
          <li>ABOUT ME</li>
          <li>PROJECTS</li>
          <li>SKILLS</li>
        </ul>
      </motion.div>
    </style.Navigation>
  );
};

export default Navigation;
