import React from "react";
import { StyledButton } from "./styles";

const index = ({ children }) => {
  return <StyledButton type="reset">{children}</StyledButton>;
};

export default index;
