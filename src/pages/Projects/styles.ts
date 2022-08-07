import styled from "styled-components";

export const Projects = styled.section`
  background: var(--yellow);

  width: 100vw;
  height: 110vh;

  display: flex;
  flex-direction: column;
  align-items: center ;

  .title {
    margin-top: 150px;
    margin-right: 600px;

    h1 {
      font-size: 4rem;
      color: var(--dark);
    }
  }

  .content {
    margin-top: 5rem;

    #projects_list {
      list-style: none;
      color: var(--dark);
      flex-wrap: nowrap;

      display: grid;
      align-items: baseline;
      grid-template-columns: 1fr 1fr 1fr;

      margin-bottom: 150px;

      #li {
        width: 455px;
        height: auto;

        margin: 1rem;

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
            margin-top: 1rem;

            a {
              font-weight: bold !important;
            }
          }
        }
      }
    }
  }

  @media(max-width: 1080px) {
    #projects_list {
      grid-template-columns: 1fr 1fr !important;
    }
  }

  @media(max-width: 768px) {
    .title {
      margin-right: 0;
    }
    
    #projects_list {
      grid-template-columns: 1fr!important;
    }

    #li {
      width: 700px !important;
    }
  }

  @media (max-width: 650px) {
    height: 190vh;

    #projects_list {
      gap: 0;
      margin-bottom: 1rem !important;
    }

    .title {
      margin: 0;

      h1 {
        text-align: center;
        margin-top: 2rem;
      }
    }

    .content {
      #li {
        width: 350px !important;
      }
    }
  }

  @media (max-width: 320px) {
    #projects_list {
      gap: 0;
    }
    
    .content {
      #li {
        width: 300px !important;
      }
    }
  }
`;
