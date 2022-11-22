import React from "react";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";
import { Container } from "./styles";

const Index = ({ isHidden, children }: Props) => {
  return <div>{!isHidden && <Container>{children}</Container>}</div>;
};

Index.defaultProps = defaultProps;

export default Index;
