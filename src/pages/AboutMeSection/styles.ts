import styled from "styled-components";

export const aboutMeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: var(--dark-background);

  .about_me_box {
    background: var(--light-window);

    border: 3px solid #000;
    box-shadow: 12px 12px var(--dark-shadow);

    display: flex;
    flex-direction: row;

    width: 1000px;
    height: 600px;

    .col-left {
      width: 45%;
      padding: 20px;

      img {
        width: 100%;
        height: 400px;

        border: 2px solid var(--dark-shadow);
        box-shadow: 10px 10px var(--dark-shadow);
      }
    }

    .col-right {
      width: 55%;
      padding: 20px;
      margin: 20px 20px 20px 0px;
      border: 2px solid var(--dark-shadow);

      color: var(--dark);

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    .about_me_box {
      width: 600px;
      height: 400px;

      .col-left {
        img {
          width: 220px;
          height: 220px;
        }
      }

      .col-right {
        h1 {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media (max-width: 650px) {
    .about_me_box {
      width: 340px;
      height: 300px;
    }

    .col-left {
      display: none;
    }

    .col-right {
      width: 100% !important;
      margin: 15px !important;
      padding: 10px !important;

      h2 {
        font-size: 0.975rem !important;
      }
    }
  }

  @media (max-width: 375px) {
    .about_me_box {
      width: 320px;
      height: 300px;
    }
  }

  @media (max-width: 320px) {
    .about_me_box {
      width: 300px;
      height: 300px;

      .col-right {
        h2 {
          font-size: 0.875rem !important;
        }
      }
    }
  }
`;
