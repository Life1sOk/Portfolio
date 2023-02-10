import styled from "styled-components";

export const ResumeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
`;

export const Var = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5px;

    padding: 5px;
    border-radius: 3px;
    border: 1px solid rgba(255,255,255, .3);
    background-color: rgba(0,21,40, .9);

    &:hover {
        cursor: pointer;
        border: 1px solid rgba(229,95,63,1);
        /* background-color: rgba(229,95,63,1); */
        color: rgba(229,95,63,1);
    };

    &:active {
        background-color: rgba(229,95,63,1);
        color: white;
    };
`;