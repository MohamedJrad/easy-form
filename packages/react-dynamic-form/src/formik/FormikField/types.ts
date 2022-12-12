import { Field } from "../../types";

export type OnValueChangeType = (e: string | string[] | Date | File) => void;

export type Dir = "ltr" | "rtl";
export interface Props {
  field: Field;
  onValueChange?: OnValueChangeType;
  fieldRightMargin: number;
  fieldMinWidth: number;
}
