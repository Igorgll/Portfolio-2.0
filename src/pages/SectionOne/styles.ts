import { aboutMeSection } from './../AboutMeSection/styles';
import styled from "styled-components";

export const SectionOne = styled.section`
    width: 100vw;
    height: 100vh;
    
    background: var(--light);

    display: flex;
    flex-direction: column;

    color: var(--dark);

    padding: 0px 160px;

    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-top: 4rem;
    }

    .col-left {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        padding-left: 40px;

        width: 60%;

        img {
            width: 800px;
            display: block;
            padding-bottom: 11rem;
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

            position: absolute;

            margin-left: 10px;

            transform: rotate(-8deg) translateY(-60px);
        }

        h1 {
            font-size: 4rem;
            font-weight: 600;
            text-align: flex-start;

            margin-top: 1rem;
        }

        #Hi {
            padding: 0px;
        }

        #waving_hand {
            padding-bottom: 30px;
            padding-left: 5px;

            transform: rotate(30deg)
        }
    }

    @media(max-width: 1440px) {
        padding: 0px 60px;

        .content {
            margin: 0;
        }

        .col-left {
            img {
                width: 600px;
            }
        }
    }

    @media(max-width: 1080px) {
        padding: 0px 19px;
        
        .content {
            margin-top: 5rem;
        }

        .col-left {
            padding: 0;
            img {
                width: 560px;
            }
        }

        .col-right {
            padding-right: 10px;
            
            span {
                font-size: 1.5rem;
            }

            h1 {
                font-size: 3rem;
            }
        }
    }

    @media(max-width: 768px) {
        .content {
            margin: 0;
        }

        .col-left {
            display: none;
        }

        .col-right {
            width: 100%;
            
            padding: 0px 30px;
            margin-top: 10rem;

            span {
                font-size: 1.4rem;
            }
        }
    }

    @media(max-width: 650px) {
        padding: 0;
        
        .col-right {
            padding: 0px 20px;
            h1 {
                font-size: 2.5rem;
            }
        }
    }
`