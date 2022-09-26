import * as style from "./styles";
import { useState } from "react";
import Navigation from "../Navigation";
import { motion, MotionConfig } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavabarOpen] = useState(false);

  const handleToggle = () => {
    setNavabarOpen(!navbarOpen);
  };

  return (
    <style.Navbar>
      <nav>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h1>Igor Lima</h1>
        </motion.div>

        <motion.div
        className="hamburguer"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <button
            type="button"
            className={`button__menu ${navbarOpen ? "active" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </motion.div>
      </nav>

      <div>{navbarOpen ? <Navigation /> : ""}</div>
    </style.Navbar>
  );
};

export default Navbar;
