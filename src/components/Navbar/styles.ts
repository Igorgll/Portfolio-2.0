import styled from "styled-components";

export const Navbar = styled.nav`
  nav {
    background: var(--blue);
    height: 100vh;
    width: 100px;
    z-index: 1;
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
      color: var(--text);
      list-style: none;
      margin: auto 0;
      opacity: 0.6;

      padding: 15px;

      border: 0.5px solid var(--text);
      border-radius: 10px;

      li {
        opacity: 0.6;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 3px;
        padding-right: 3px;

        transition: 0.6s;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }

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
      padding: 50px 30px;

      ul {
        display: none;
      }
    }
  }

  @media (max-width: 650px) {
    nav {
      padding: 50px 20px;
    }
  }
`;
