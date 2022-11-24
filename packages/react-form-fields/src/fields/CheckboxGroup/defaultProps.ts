const options = [
  { value: "1", label: "option1" },
  { value: "2", label: "option2" },
  { value: "3", label: "option3" },
];

export const defaultProps = {
  name: "radioGroup",
  label: "Radio Group",
  isRequired: false,
  isReadOnly: false,
  isHidden: false,
  isMultiple: true,
  error: false,
  isTouched: false,
  errorMessage: "this field is required",
  options,
  direction: "vertical",
};
