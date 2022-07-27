import styled from "styled-components";

export const Navbar = styled.nav`
  span {
    display: none;
  }

  nav {
    background: transparent;
    width: 100%;

    padding: 50px 200px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;

    #nav__collapse {
      display: none;
    }

    h1 {
      font-size: 2rem;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;

      gap: 3rem;

      li {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      padding: 50px 60px;

      ul {
        display: none;
      }

      #nav__collapse {
        display: block;
      }
    }
  }
`;
