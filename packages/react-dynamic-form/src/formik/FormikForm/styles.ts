import styled from "styled-components";

export const Container = styled.div``;

export const InlineFieldContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
`;

export const Wrapper = styled.div<{ error: boolean }>`
  border-radius: 5px;
  position: relative;
  background-color: #f8f8f8;

  border: 1px solid ${({ error }) => (error ? "red" : "#1d292e")};
  height: 60px;
  width: 100%;
  &:hover {
    border: 1px dashed #1d292e;
  }
`;
export const InlineFieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
