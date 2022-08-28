import * as style from "./styles";
import { BsFillCircleFill } from "react-icons/bs";
import { GiBookshelf, GiSkills } from "react-icons/gi";
import { RiMacbookLine } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

// const [repos, setRepos] = useState<Repo[]>([]);

// useEffect(() => {
//   fetch(`https://api.github.com/users/${user}/repos`)
//     .then((response) => response.json())
//     .then((data) => {
//       const repositories = [data[1], data[3], data[5], data[13], data[24]];
//       setRepos(repositories);
//     });
// }, []);

// interface Repo {
// name: string;
//   description: string;
//   html_url: string;
//   homepage: string;
// }

// const user = "igorgll";

export default function Folder() {
  interface Props {}

  const renderNavLinks = () => {
    return (
      <>
        <ul className="folder_links">
          <li>
            <CgProfile />
            About me
          </li>
          <li>
            <GiBookshelf />
            Education
          </li>
          <li>
            <GiSkills />
            Skills
          </li>
          <li>
            <RiMacbookLine />
            Projects
          </li>
          <li>
            <FaRegAddressBook />
            Resume
          </li>
          <li>
            <IoShareSocialSharp />
            Socials
          </li>
        </ul>
      </>
    );
  };

  return (
    <style.folder>
      <div className="folder_window">
        <BsFillCircleFill style={{ color: "var(--dark)" }} />
        <BsFillCircleFill style={{ color: "var(--dark)" }} />
        <BsFillCircleFill style={{ color: "var(--dark)" }} />
      </div>

      <div className="folder_body">
        <div className="left_handside">{renderNavLinks()}</div>
        <div
          className="explorer_content"
          style={{ background: "var(--folder-dark)", padding: "20px" }}
        ></div>
      </div>
    </style.folder>
  );
}
