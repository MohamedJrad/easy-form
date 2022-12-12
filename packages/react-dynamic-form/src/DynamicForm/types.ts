import { ReactNode } from "react";
import { Field } from "../types";

export interface Props {
  fields?: Field[];
  onSubmit?: (e: unknown) => void;
  submitButtonLabel?: string;
  placement?: number[] | number[][];
  fieldMinWidth?: number;
  fieldRightMargin?: number;
  children?: ReactNode;
  // theme,
}
