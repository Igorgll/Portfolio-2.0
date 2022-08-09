import styled from "styled-components";

export const Projects = styled.section`
  background: url("https://imgur.com/qpmwzD1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;

  width: 100vw;
  height: 120vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background: var(--yellow);
  }
`;
