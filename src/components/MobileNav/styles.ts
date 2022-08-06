import styled from "styled-components";

export const navToggle = styled.div`
    position: fixed;
    bottom: 0;

    z-index: 1;

    background: var(--light);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 80px;

    border-top: 3px solid var(--dark);

    ul {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        list-style: none;

        padding-top: 2rem;
    }
`;
