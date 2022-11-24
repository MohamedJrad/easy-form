const options = [
  { value: "1", label: "option1" },
  { value: "2", label: "option2" },
  { value: "3", label: "option3" },
];

export const defaultProps = {
  name: "select",
  label: "Select",
  isRequired: false,
  isReadOnly: false,
  isHidden: false,
  error: "error message",
  isTouched: false,
  options,
  isWithRequiredStar: false,
};
