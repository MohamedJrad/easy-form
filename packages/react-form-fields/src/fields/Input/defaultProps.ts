import { Props } from "./types";

export const defaultProps: Props = {
  type: "text",
  name: "firstName",
  label: "first Name",
  placeholder: "first name",
  isRequired: false,
  defaultValue: "",
  isReadOnly: false,
  isHidden: false,
  error: "default error message",
  isTouched: false,
  maxLength: 30,
  isMultiline: false,
  minRows: 1,
};
