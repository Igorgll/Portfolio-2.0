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

    .hamburguer {
      z-index: 2;
    }

    .button__menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      row-gap: 6px;

      width: 40px;
      z-index: 2;

      background: transparent;
    }

    .button__menu span {
      width: 100%;
      height: 5px;

      border-radius: 6px;

      display: block;
      background: var(--dark);

      transition: all 0.6s;
    }

    .button__menu.active span:last-child {
      width: 100%;
      transform: rotate(46deg) translateY(-16px);
    }

    .button__menu.active span:nth-child(1) {
      transform: rotate(-45deg) translateY(16px);
    }

    .button__menu.active span:nth-child(2) {
      opacity: 0;
    }

    #nav__collapse {
      display: none;
    }

    h1 {
      font-size: 2rem;
      font-family: "Itim", cursive;
      cursor: pointer;
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

      .button__menu {
        display: none;
      }

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
