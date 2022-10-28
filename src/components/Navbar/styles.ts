import styled from "styled-components";

export const Navbar = styled.nav`
  nav {
    background: var(--blue);
    height: 100vh;
    width: 100px;
    overflow-x: hidden;
    margin: 0;

    padding: 24px 12px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-transform: uppercase;

    strong {
      font-size: 3rem;
      font-weight: 900;
      letter-spacing: 1px;
      cursor: pointer;
    }

    .nav_links {
      list-style: none;
      opacity: 0.6;
      margin: auto 0;

      padding: 15px;

      border: 0.5px solid var(--text);
      border-radius: 12px;

      li {
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 3px;
        padding-right: 3px;

        transition: 0.6s;
        cursor: pointer;

        &:first-child {
          border-bottom: 0.5px solid var(--text);
        }

        &:nth-child(2) {
          border-bottom: 0.5px solid var(--text);
        }

        &:nth-child(3) {
          border-bottom: 0.5px solid var(--text);
        }
      }

      first-child,
      nth-child(2),
      nth-child(3) {
        border-bottom: 0.5px solid var(--text);
      }

      li:last-child {
        padding-bottom: 3px;
      }

      svg {
        width: 24px;
        height: auto;
      }
    }
  }

  @media (max-width: 1080px) {
    nav {
      nav {
        padding: 50px 50px;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      height: auto;
      width: 100%;

      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;

      background: transparent;
      .nav_links {
        display: flex;
        width: 700px;

        li {
          border: none !important;

          padding-top: 0;
          padding-bottom: 0;
          padding-left: 50px;
          padding-right: 50px;
        }
      }

      strong {
        display: none;
      }
    }
  }

  @media (max-width: 650px) {
    nav {
      padding: 50px 20px;
    }

    .nav_links {
      width: 360px !important;

      li {
        padding: 0 !important;
        display: flex;
        align-items: center !important;

        &:first-child {
          padding-left: 40px !important;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .nav_links {
      width: 330px !important;
    }
  }

  @media (max-width: 320px) {
    .nav_links {
      width: 300px !important;
    }
  }
`;
