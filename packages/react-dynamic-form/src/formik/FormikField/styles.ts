import styled, { css } from "styled-components";
import { Dir } from "./types";

export const Wrapper = styled.div<{
  dir: Dir;
  fieldRightMargin: number;
  fieldMinWidth: number;
}>`
  min-width: ${({ fieldMinWidth }) => `${fieldMinWidth}px`};

  ${({ dir, fieldRightMargin }) =>
    dir === "rtl"
      ? css`
          margin-left: ${fieldRightMargin}px;
        `
      : css`
          margin-right: ${fieldRightMargin}px;
        `}
`;
