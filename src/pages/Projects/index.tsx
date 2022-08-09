import * as style from "./styles";
import { BsFillCircleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Folder from "../../components/Folder";

// interface Repo {
//   name: string;
//   description: string;
//   html_url: string;
//   homepage: string;
// }

// const user = "igorgll";

const Projects = () => {
  // const [repos, setRepos] = useState<Repo[]>([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${user}/repos`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const repositories = [data[1], data[3], data[5], data[13], data[24]];
  //       setRepos(repositories);
  //     });
  // }, []);

  const constraintsRef = useRef(null);

  return (
    <style.Projects ref={constraintsRef}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          whileTap={{ cursor: "grabbing" }}
        >
          <Folder />
        </motion.div>
    </style.Projects>
  );
};

export default Projects;
