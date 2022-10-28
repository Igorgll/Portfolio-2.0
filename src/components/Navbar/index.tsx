import * as style from "./styles";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { ImHome3, ImUser, ImFolderOpen, ImBubble } from "react-icons/im";

const Navbar = () => {
  return (
    <style.Navbar>
      <nav>
        {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        > */}
          <strong>il</strong>
          <ul className="nav_links">
            <li>
              <ImHome3 />
            </li>
            <li>
              <ImUser />
            </li>
            <li>
              <ImFolderOpen />
            </li>
            <li>
              <ImBubble />
            </li>
          </ul>
        {/* </motion.div> */}
      </nav>
    </style.Navbar>
  );
};

export default Navbar;
