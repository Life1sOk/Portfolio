import styled from "styled-components";

export const ProjectBoxStyle = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    max-width: 1000px;
    margin-bottom: 100px;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

export const ImageWrapper = styled.div`
    height: fit-content;
    position: relative;
    grid-area: ${({ isLeftSide }) => isLeftSide ? '1 / 1 / -1 / 8' : '1 / 6 / -1 / -1'};
    border-radius: 5px;
    overflow: hidden;

    display: flex;
    align-items: center;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        width: 100%;
        height: 100%;
        background-color: var(--blue);
        opacity: .5;

        transition: opacity .3s linear;

        @media only screen and (max-width: 765px) {
            display: none;
        };
    }

    :hover {
        cursor: pointer;

        ::before {
            opacity: 0;
        }
    }

    @media only screen and (max-width: 765px) {
        grid-area: 1 / 1/ -1 / -1;
    };
`;

export const Image = styled.img`
    width: 100%;
    height: fit-content;
`;

export const Description = styled.div`
    position: relative;

    width: 100%;
    grid-area: ${({ isLeftSide }) => isLeftSide ? '1 / 7 / -1 / -1' : '1 / 1 / -1 / 7'};

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 765px) {
        grid-area: 1 / 1/ -1 / -1;
        background-color: rgba(0, 21, 40, .8);
        padding: 9%;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,.2);
    };
`;

export const DesTitle = styled.h3`
    font-size: 22px;
    margin: ${({ isLeftSide }) => isLeftSide ? '0 22px 22px 0' : '0 0 22px 22px'};
    text-align: ${({ isLeftSide }) => isLeftSide ? 'right' : 'left'};
`;

export const DesMain = styled.div`
    position: relative;
    z-index: 3;

    width: 100%;
    height: fit-content;
    padding: 25px;
    font-size: 15px;

    border-radius: 10px;
    background-color: var(--background-secondary);
`;

export const Tools = styled.ul`
    font-size: 14px;
    color: var(--light-yellow);
    margin: ${({ isLeftSide }) => isLeftSide ? '25px 0 0 18%' : '25px 18% 0 0'};

    display: flex;
    justify-content: ${({ isLeftSide }) => isLeftSide ? 'flex-end' : 'flex-start'};
    flex-wrap: wrap;

    & li {
        margin: ${({ isLeftSide }) => isLeftSide ? '0 20px 5px 0' : '0 0 5px 20px'};
    }
`;

export const Links = styled.div`
    width: 100%;
    margin-top: 11px;

    display: flex;
    justify-content: ${({ isLeftSide }) => isLeftSide ? 'flex-end' : 'flex-start'};
`;

export const LinkWrapper = styled.a`
    width: 40px;
    aspect-ratio: 1/1;
    padding: 10px;

    & svg {
        width: 100%;
        height: 100%;
    }
`;