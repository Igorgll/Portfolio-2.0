import styled from "styled-components";

export const aboutMeSection = styled.section`
  width: 100vw;
  height: 110vh;

  background: var(--yellow);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    display: none;
  }
`;
