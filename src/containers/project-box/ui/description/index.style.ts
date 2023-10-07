import styled from "styled-components";

export const DescriptionUiStyle = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;

  padding: 12px 23px 12px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1044px) {
    padding: 12px 23px;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: fit-content;
  padding: 12px;
  margin-bottom: 10px;
  font-size: 14px;

  border-radius: 10px;
  background-color: var(--background-secondary);

  & p {
    text-align: left;
  }

  @media only screen and (max-width: 410px) {
    line-height: 1.6;
  }
`;

export const Links = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const InfoWrapper = styled.div`
  width: 100%;

  padding: 7px 7px 7px 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Status = styled.div`
  width: 100%;

  font-size: 12px;
  font-weight: 500;

  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: white;
  margin: 0 7px 10px 0;
  padding-left: 10px;
  text-align: left;
`;
