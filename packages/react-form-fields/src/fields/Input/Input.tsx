import { FieldLabel, ErrorMessage, FieldContainer } from "../../atoms";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";
import { useLogic } from "./helpers/useLogic";
import { StyledTextField } from "./styles";

const Index = ({
  type,
  name,
  label,
  placeholder,
  defaultValue,
  isHidden,
  isReadOnly,
  isRequired,
  isTouched,
  isDisabled,
  error,
  maxLength,
  isWithRequiredStar,
  onValueChange,
  isMultiline,
  minRows,
}: Props) => {
  const { value, handleChange } = useLogic({
    type,
    defaultValue,
    maxLength,
    onValueChange,
  });

  return (
    <FieldContainer isHidden={isHidden}>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />
      <StyledTextField
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        error={isTouched && !!error}
        disabled={isDisabled}
        multiline={isMultiline}
        minRows={minRows}
        onChange={handleChange}
        InputProps={{
          readOnly: isReadOnly,
        }}
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
        }}
      />
      <ErrorMessage error={error || ""} isTouched={isTouched} />
    </FieldContainer>
  );
};

Index.defaultProps = defaultProps;

export default Index;
