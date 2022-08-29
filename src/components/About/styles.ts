import styled from "styled-components";

export const aboutIgor = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--dark);
  }

  img {
    border-radius: 50%;
    width: 250px;
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
    }
  }
`;
