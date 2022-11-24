const options = [
  { value: "1", label: "option1" },
  { value: "2", label: "option2" },
  { value: "3", label: "option3" },
];

export const defaultProps = {
  name: "radioGroup",
  label: "Radio Group",
  required: true,
  isReadOnly: false,
  isHidden: false,
  error: "Error message",
  isTouched: false,
  options,
  direction: "vertical",
  withRequiredStar: true,
};
