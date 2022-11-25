export type Dir = "ltr" | "rtl";

interface Option {
  value: string;
  label: string;
}

interface Field {
  type: string;
  name: string;
  label: string;
  defaultValue?: Option;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  isWithRequiredStar?: boolean;
  options?: Option[];
  onValueChange?: (e: string) => void;
  direction?: "horizontal" | "vertical";
}

export interface Props {
  field: Field;
  onValueChange: (e: unknown) => void;
  fieldRightMargin: number;
  fieldMinWidth: number;
}
