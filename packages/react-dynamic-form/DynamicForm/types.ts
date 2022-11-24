import { ReactNode } from "react";

export interface Props {
  fields?: unknown[];
  onSubmit?: (e: unknown) => void;
  submitButtonLabel?: string;
  placement?: number[] | number[][];
  fieldMinWidth?: number;
  fieldRightMargin?: number;
  children?: ReactNode;
  // theme,
}
