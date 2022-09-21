import styled from "styled-components";

export const Navigation = styled.section`
  position: fixed;
  top: 0;
  right: -660px;
  width: 150vw;
  height: 100vh;
  z-index: 1;

  transition: all 0.6s;

  background: var(--laurel-green);

  padding-top: 66px;
  padding-bottom: 32px;
  padding-left: 54px;
  padding-right: 80px;
  overflow: auto;

   .navigation.active {
    transform: translateX(-660px);
  }
`;
