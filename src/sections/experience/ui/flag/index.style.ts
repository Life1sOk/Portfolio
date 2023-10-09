import styled from "styled-components";

export const FlagStyle = styled.div<{ color?: string }>`
  width: fit-content;
  height: fit-content;

  border-radius: 4px;
  padding: 0 12px 16px;
  box-shadow: ${({ color }) => (color ? color : "rgba(149, 157, 165, 0.2)")} 0px 8px 24px;
  border: 1px solid rgba(38, 57, 77, 0.2);

  display: flex;
  flex-direction: column;
`;

export const FlagTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
