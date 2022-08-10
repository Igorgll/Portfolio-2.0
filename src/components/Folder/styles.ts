import styled from "styled-components";

export const folder = styled.div`
  width: 1200px;

  border-radius: 15px;

  background: var(--folder-dark);

  display: flex;
  flex-direction: column;

  .folder_window {
    width: 100%;
    height: 38px;

    display: flex;
    align-items: center;

    padding-left: 1.2rem;

    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom: 1.2px solid #000;

    background: var(--light-gray);

    svg {
      margin-left: 8px;
    }
  }

  .folder_body {
    display: grid;
    grid-template-columns: 200px 1fr;

    .left_handside {
      height: 100%;

      background: var(--light-gray);

      border-bottom-left-radius: 15px;
      border-right: 1px solid #000;

      .folder_links {
        list-style: none;

        gap: 10px;

        padding: 20px;

        display: flex;
        flex-direction: column;

        li {
          color: var(--light);
          font-size: 1.4rem;

          padding: 2px;

          cursor: pointer;

          transition: all 0.2s;

          border-radius: 6px;

          &:hover {
            background: var(--folder-hover);
          }

          svg {
            padding-top: 5px;
            padding-right: 5px;
          }
        }
      }
    }
  }
    .explorer_content {
      display: flex;
      flex-direction: column;

      height: 662px;

      border-bottom-right-radius: 15px;


  }

  @media (max-width: 1080px) {
      width: 900px;

    .explorer_content {
      height: 530px !important;
    }
  }

  @media(max-width: 768px) {
    width: 700px;
  }

  @media(max-width: 650px) {
    display: none;
  }
`;
