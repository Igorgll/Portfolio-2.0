import * as style from "./styles";
import { BsFillCircleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

const user = "igorgll";

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        const repositories = [data[1], data[3], data[5], data[13], data[24]];
        setRepos(repositories);
      });
  }, []);

  const constraintsRef = useRef(null);

  return (
    <style.Projects ref={constraintsRef}>
      <div className="title">
        <h1>Projects.</h1>
      </div>
      <div className="content">
        <ul id="projects_list">
          {repos.map((repo) => {
            return (
              <motion.div
                id="li"
                drag
                dragConstraints={constraintsRef}
                whileTap={{ cursor: "grabbing" }}
              >
                <div className="border_window">
                  <BsFillCircleFill />
                  <BsFillCircleFill />
                  <BsFillCircleFill />
                </div>
                <div className="card_body">
                  <h2 key={repo.name}>{repo.name}</h2>
                  <p key={repo.description}>{repo.description}</p>
                  <div className="project_links">
                    <a href={repo.homepage} target="_blank">
                      Take a look
                    </a>
                    <a href={repo.html_url} target="_blank">
                      Github repo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </style.Projects>
  );
};

export default Projects;
