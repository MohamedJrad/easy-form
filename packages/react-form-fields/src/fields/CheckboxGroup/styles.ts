import styled from "styled-components";

export const GroupWrapper = styled.div<{
  direction: "vertical" | "horizontal";
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  flex-wrap: wrap;
  label {
    height: fit-content;
    margin: 0;
  }
`;
