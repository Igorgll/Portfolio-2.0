import styled from "styled-components";

export const Projects = styled.div`
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;

    li {
      border: 1.5px solid var(--dark);
      border-radius: 6px;
      padding: 10px;
    }
  }
`;
