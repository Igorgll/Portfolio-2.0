import { useEffect, useState } from "react";
import * as style from "./styles";

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const user = "igorgll";
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const repositories = [data[1], data[3], data[5], data[13], data[25]];
        setRepos(repositories);
      });
  }, []);

  interface Repo {
    name: string;
    description: string;
    html_url: string;
    homepage: string;
  }

  return (
    <style.Projects>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.name}>
              {repo.name}
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
    </style.Projects>
  );
};

export default Projects;
