import styled from "styled-components";

export const Navigation = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  background: var(--yellow);

  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 80px;
  padding-left: 80px;
  overflow: auto;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      font-family: 'itim', cursive;
      font-size: 2.5rem;
    }
  }
`;
