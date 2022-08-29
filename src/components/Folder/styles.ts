import styled from "styled-components";

export const folder = styled.div`
  width: 1200px;

  border-radius: 15px;

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
    border: 2px solid var(--dark);

    background: var(--light);

    svg {
      margin-left: 8px;
    }
  }

  .folder_body {
    display: grid;
    grid-template-columns: 200px 1fr;

    .left_handside {
      height: 100%;

      background: var(--light);

      border-bottom-left-radius: 15px;
      border-right: 2px solid var(--dark);
      border-left: 2px solid var(--dark);
      border-bottom: 2px solid var(--dark);

      .folder_links {
        list-style: none;

        gap: 10px;

        padding: 20px;

        display: flex;
        flex-direction: column;

        li {
          color: var(--dark);
          font-size: 1.4rem;
          font-weight: 500;

          padding: 2px;

          cursor: pointer;

          transition: all 0.2s;

          border-radius: 6px;

          &:hover {
            background: var(--folder-hover);
            color: var(--light);
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
    background: var(--light) !important;


    height: 662px;

    border-bottom-right-radius: 15px;
    border-bottom: 2px solid var(--dark);
    border-right: 2px solid var(--dark);
  }

  @media (max-width: 1080px) {
    width: 900px;

    .explorer_content {
      height: 530px !important;
    }
  }

  @media (max-width: 768px) {
    width: 700px;
  }
`;
