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

    .explorer_content {
      display: flex;
      flex-direction: column;

      height: 662px;

      border-bottom-right-radius: 15px;

      ul {
        display: grid;
        grid-template-columns: 200px 200px 200px 200px 100px;
        grid-template-rows: 150px 150px;
        gap: 0;

        width: 100%;

        li {
          width: 100px;
          height: 110px;

          cursor: pointer;

          img {
            width: 100px;
          }
        }
      }
    }
  }

  @media (max-width: 1080px) {
    width: 900px;

    .folder_body {
      grid-template-columns: 200px 1fr;
    }

    .explorer_content {
      width: 700px;
      height: 530px !important;

      ul {
        grid-template-columns: 170px 170px 170px 200px 100px !important;
      }
    }
  }

  @media(max-width: 768px) {
    display: none;
  }
`;
