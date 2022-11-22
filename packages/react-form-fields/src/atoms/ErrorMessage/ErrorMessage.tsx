import React from "react";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";
import { ErrorMessage, ErrorMessageWrapper } from "./styles";

const Index = ({ error, isTouched }: Props) => {
  return (
    <ErrorMessageWrapper>
      {isTouched && error && <ErrorMessage>{error}</ErrorMessage>}
    </ErrorMessageWrapper>
  );
};

Index.defaultProps = defaultProps;

export default Index;
