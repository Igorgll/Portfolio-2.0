import styled from "styled-components";

export const Navbar = styled.nav`
  span {
    display: none;
  }

  nav {
    background: transparent;
    width: 100%;

    padding: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;

    color: var(--dark);

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

  @media (max-width: 1080px) {
    nav {
      padding: 50px 60px;
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

  @media(max-width: 650px) {
    nav {
      padding: 50px 20px;
    }
  }
`
