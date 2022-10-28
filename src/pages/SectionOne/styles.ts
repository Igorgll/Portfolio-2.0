import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

export const SectionOne = styled.section`
  width: 100vw;
  height: 100vh;

  background: var(--background);

  display: flex;
  flex-direction: column;

  color: var(--light);

  /* padding: 0px 120px; */

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .welcome_text {
    display: flex;
    flex-direction: column;

    margin-left: 5rem;

    p {
      font-size: 1.5rem;
      font-weight: 300;
      text-align: flex-start;
      max-width: 600px;
      color: var(--text);
    }

    h1 {
      font-size: 4.5rem;
      font-weight: 900 !important;
      font-weight: 400;
      text-transform: uppercase;
      padding: 0px;
    }

    .social_media_icons {
      display: flex;
      flex-direction: row;
      margin-top: 1.5rem;
      gap: 10px;
    }

    svg {
      opacity: 0.6;
      width: 32px;
      gap: 5px;
      width: 32px;
      height: auto;
      cursor: pointer;
      transition: 0.6s;

      &:hover {
        opacity: 1;
      }
    }
  }

  #nav__collapse {
    display: none;
  }

  @media (max-width: 1440px) {
    .content {
      margin: 0;
    }
  }

  @media (max-width: 1080px) {
    .welcome_text {
      padding-right: 10px;

      span {
        font-size: 1.5rem;
      }

      h1 {
        font-size: 3rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0;

    .content {
      height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: column-reverse;
    }

    .welcome_text {
      width: 100%;
      margin: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        text-align: center;
        max-width: 100%;
        font-size: 4.5rem;
      }

      p {
        text-align: center;
      }

      .social_media_icons {
        display: flex;
        justify-content: center;
      }

      span {
        font-size: 1.4rem;
      }
    }

    #nav__collapse {
      display: block;
    }
  }

  @media (max-width: 650px) {
    padding: 0;

    width: 100%;
    height: 100vh;

    .welcome_text {
      padding: 0px 20px;
      h1 {
        font-size: 2.5rem;
      }

      svg {
        width: 25px;
      }
    }
  }
`;
