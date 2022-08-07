import styled from "styled-components";

export const folder = styled.div`
  width: 1200px;
  height: 700px;

  margin-top: 4rem;

  border-radius: 15px;

  background: var(--dark);

  display: flex;
  flex-direction: column;

  .folder_window {
    width: 100%;
    height: 50px;

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

      background: var(--dark);

      border-bottom-left-radius: 15px;

      .folder_links {
        list-style: none;

        gap: 15px;

        padding: 20px;

        display: flex;
        /* justify-content: center; */
        flex-direction: column;

        li {
          color: var(--light);
          font-size: 1.4rem;

          svg {
            padding-top: 5px;
          }
        }
      }
    }

    .folder_content {
      display: flex;
      justify-content: space-around;

      height: 650px;

      border-bottom-right-radius: 15px;

      ul {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }
  }
`;
