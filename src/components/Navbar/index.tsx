import * as style from "./styles";
import { useState } from "react";
import Navigation from "../Navigation";

const Navbar = () => {
  const [navbarOpen, setNavabarOpen] = useState(false);

  const handleToggle = () => {
    setNavabarOpen(!navbarOpen);
  };

  return (
    <style.Navbar>
      <nav>
        <h1>Igor Lima</h1>

        <button type="button" className="button__menu" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div>
        {navbarOpen ? <Navigation /> : ""}
      </div>
    </style.Navbar>
  );
};

export default Navbar;
