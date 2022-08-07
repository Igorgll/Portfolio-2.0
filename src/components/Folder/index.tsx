import * as style from "./styles";
import { MotionConfig } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsFillCircleFill, BsLink, BsHouseDoor } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import folder from "../../assets/folder.png";

export default function Folder() {
  const FOLDER_NAV_LINKS = [
    {
      name: "Desktop",
    },
    {
      name: "Downloads",
    },
    {
      name: "Images",
    },
    {
      name: "Songs",
    },
    {
      name: "Videos",
    },
    {
      name: "Trash",
    },
  ];

  const LIST_FOLDERS = [
    {
      img: "https://imgur.com/h30UI3p.png",
      name: "Projects",
    },
    {
      img: "https://imgur.com/h30UI3p.png",
      name: "Videos",
    },
    {
      img: "https://imgur.com/h30UI3p.png",
      name: "Photos",
    },
    {
      img: "https://imgur.com/h30UI3p.png",
      name: "Songs",
    },
  ];

  return (
    <style.folder>
      <div className="folder_window">
        <BsFillCircleFill style={{ color: "var(--red)" }} />
        <BsFillCircleFill style={{ color: "var(--orange)" }} />
        <BsFillCircleFill style={{ color: "var(--green)" }} />
      </div>

      <div className="folder_body">
        <div className="left_handside">
          <ul className="folder_links">
            {FOLDER_NAV_LINKS.map((link) => {
              return (
                <li style={{ borderRadius: "6px", fontWeight: "200" }}>
                  <CgFileDocument style={{ color: "var(--icons)" }} />
                  {link.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="explorer_content"
          style={{ background: "var(--folder-dark)", padding: "20px" }}
        >
          <ul style={{ listStyle: "none" }}>
            {LIST_FOLDERS.map((item) => {
              return (
                <li>
                  <img src={item.img} alt="Folder" />
                  <p
                    style={{
                      color: "#FEFEFE",
                      textAlign: "center",
                      fontWeight: "300",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </style.folder>
  );
}
