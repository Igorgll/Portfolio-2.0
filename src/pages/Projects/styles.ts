import styled from "styled-components";

export const Projects = styled.section`
  background: var(--yellow);

  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-top: 4rem;

    h1 {
      font-size: 4rem;
      color: var(--dark);
    }
  }

  .content {
    display: flex;
    justify-content: center;
    margin-top: 5rem;

    #projects_list {
      list-style: none;
      color: var(--dark);

      display: flex;
      flex-direction: column;

      #li {
        width: 455px;
        height: auto;

        margin: 1rem;
        /* padding: 20px; */

        border: 2px solid #000;
        border-radius: 20px;

        background: var(--light-window);

        h2 {
          text-align: center;
        }

        .border_window {
          width: 100%;
          height: 35px;

          padding-left: 8px;

          display: flex;
          flex-direction: row;
          align-items: center;

          border-bottom: 2px solid #000;

          svg {
            margin-left: 8px;
          }
        }

        .card_body {
          padding: 20px;
        
            h2 {
                font-size: 2rem;
                font-weight: 600;
            }

            p {
                font-size: 1.3rem;
                font-weight: 400;

                margin-top: 2rem;
            }

            .project_links {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                a {
                    margin-top: 1.2rem;
                    font-weight: 600;
                }
            }
        }
      }
    }
  }
`;
