import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FieldContainer, ErrorMessage, FieldLabel } from "../../atoms";
import { useLogic } from "./useLogic";
import { RadioWrapper } from "./styles";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";

const Index = ({
  name,
  label,
  defaultValue,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  onValueChange,
  options,
  direction,
}: Props) => {
  const { handleChange } = useLogic({ defaultValue, onValueChange, options });

  return (
    <FieldContainer isHidden={isHidden}>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name={name}
        onChange={handleChange}
      >
        <RadioWrapper direction={direction}>
          {options?.map((option) => (
            <FormControlLabel
              key={option.label}
              value={option.value}
              control={
                <Radio
                  sx={{
                    color: "#1D292E",
                    "&.Mui-checked": {
                      color: "#1D292E",
                    },
                  }}
                />
              }
              label={option.label}
            />
          ))}
        </RadioWrapper>
      </RadioGroup>
      <ErrorMessage error={error} isTouched={isTouched} />
    </FieldContainer>
  );
};
Index.defaultProps = defaultProps;

export default Index;
