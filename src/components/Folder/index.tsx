import { MotionConfig } from "framer-motion";
import * as style from "./styles";
import { useEffect, useRef, useState } from "react";
import { BsFillCircleFill, BsLink } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";
import folder from "../../assets/folder.png";

export default function Folder() {
  const FOLDER_NAV_LINKS = [
    "Desktop",
    "Projects",
    "Downloads",
    "Images",
    "Songs",
    "Videos",
    "Trash",
  ];

  return (
    <style.folder>
      <div className="folder_window">
        <BsFillCircleFill style={{ color: "red" }} />
        <BsFillCircleFill style={{ color: "orange" }} />
        <BsFillCircleFill style={{ color: "green" }} />
      </div>

      <div className="folder_body">
        <div className="left_handside">
          <ul className="folder_links">
            {FOLDER_NAV_LINKS.map((link) => {
              return (
                <li>
                  {" "}
                  <CgFileDocument style={{ color: "#3394f5" }} /> {link}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="folder_content"
          style={{ background: "#000", padding: "20px" }}
        >
          <ul style={{ listStyle: "none" }}>
            <li>
              <img src={folder} style={{ width: "100px" }} alt="folder" />
            </li>
          </ul>
        </div>
      </div>
    </style.folder>
  );
}
