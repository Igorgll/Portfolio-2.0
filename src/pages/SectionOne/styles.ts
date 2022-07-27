import styled from "styled-components";

export const SectionOne = styled.section`
    width: 100vw;
    height: 100vh;
    
    background: var(--yellow);

    display: flex;
    flex-direction: column;

    padding: 0px 100px;

    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .col-left {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        padding-left: 40px;

        width: 60%;

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
    }

    .col-right {
        display: flex;
        flex-direction: column;
        
        width: 40%;
        padding-right: 40px;
        padding-bottom: 160px;

        margin-top: 1rem;

        span {
            display: flex;
            align-items: center;
            font-size: 2rem; 
        }

        h1 {
            font-size: 4rem;
            font-weight: 600;
            text-align: flex-start;
        }

        img {
            padding-bottom: 14px;
            padding-left: 8px;
        }
    }
`