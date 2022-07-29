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

        border: 3px solid #000;
      }
    }

    .col-right {
      width: 55%;
      padding: 20px;
      margin: 20px 20px 20px 0px;
      border: 3px solid #000;
      
      color: var(--dark);
      
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
