import styled from "styled-components";

export const RadioWrapper = styled.div<{
  direction: "vertical" | "horizontal";
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};

  label {
    height: fit-content;
    margin: 0;
  }
`;
