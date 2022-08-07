import styled from "styled-components";

export const folder = styled.div`
  width: 1200px;
  height: 700px;

  margin-top: 4rem;

  border-radius: 15px;

  background: var(--light-gray);

  display: flex;
  flex-direction: column;

  .folder_window {
    width: 100%;
    height: 38px;

    display: flex;
    align-items: center;

    padding-left: 1.2rem;

    border-bottom: 1.5px solid #000;

    svg {
      margin-left: 8px;
    }
  }

  .folder_body {
    display: grid;
    grid-template-columns: 250px 1fr;

    .left_handside {
      height: 650px;

      background: var(--light-gray);

      border-bottom-left-radius: 15px;
      border-right: 1px solid #000;

      .folder_links {
        list-style: none;

        gap: 10px;

        padding: 20px;

        display: flex;
        /* justify-content: center; */
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

      height: 650px;

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
`;
