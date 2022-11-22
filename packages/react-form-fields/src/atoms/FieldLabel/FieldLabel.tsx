import React from "react";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";
import { StyledLabel, LabelWrapper } from "./styles";

const Index = ({ label, isRequired, isWithRequiredStar }: Props) => {
  return (
    <LabelWrapper>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      {isRequired && isWithRequiredStar && label && (
        <div style={{ color: "red" }}>*</div>
      )}
    </LabelWrapper>
  );
};

Index.defaultProps = defaultProps;

export default Index;
