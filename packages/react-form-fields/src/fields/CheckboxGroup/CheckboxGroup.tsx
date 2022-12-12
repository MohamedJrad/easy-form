import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ErrorMessage, FieldContainer, FieldLabel } from "../../atoms";
import { GroupWrapper } from "./styles";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";
import { useLogic } from "./useLogic";

const Index = ({
  name,
  label,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  onValueChange,
  options,
  direction,
}: Props) => {
  const { handleChange } = useLogic(options, onValueChange);

  return (
    <FieldContainer isHidden={isHidden}>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />
      <FormGroup onChange={handleChange}>
        <GroupWrapper direction={direction}>
          {options?.map((option) => (
            <FormControlLabel
              name={name}
              key={option.label}
              value={option.value}
              control={
                <Checkbox
                  name={option.label}
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
        </GroupWrapper>
      </FormGroup>

      <ErrorMessage error={error} isTouched={isTouched} />
    </FieldContainer>
  );
};
Index.defaultProps = defaultProps;

export default Index;
