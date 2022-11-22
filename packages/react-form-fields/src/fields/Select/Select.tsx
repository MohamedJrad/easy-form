import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { ErrorMessage, FieldContainer, FieldLabel } from "../../atoms";
import { useLogic } from "./useLogic";
import { StyledTextField } from "./styles";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";

const Index = ({
  name,
  label,
  placeholder,
  defaultValue,
  isHidden,
  isRequired,
  isTouched,
  isDisabled,
  error,
  isWithRequiredStar,
  onValueChange,
  options,
}: Props) => {
  const { handleChange, value } = useLogic({
    onValueChange,
    defaultValue,
  });
  return (
    <FieldContainer isHidden={isHidden}>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />

      <StyledTextField
        name={name}
        disabled={isDisabled}
        value={value}
        onChange={handleChange}
        select
        InputLabelProps={{ shrink: false }}
        SelectProps={{
          MenuProps: {},
        }}
        margin="normal"
        variant="outlined"
        error={isTouched && !!error}
      >
        {placeholder && (
          <MenuItem value="none" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledTextField>
      <ErrorMessage error={error} isTouched={isTouched} />
    </FieldContainer>
  );
};
Index.defaultProps = defaultProps;

export default Index;
