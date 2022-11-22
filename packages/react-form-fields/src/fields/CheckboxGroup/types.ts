interface Option {
  value: string;
  label: string;
}

export interface Props {
  name: string;
  label: string;
  defaultValue?: string;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  isWithRequiredStar?: boolean;
  options?: Option[];
  onValueChange?: (e: string[]) => void;
  direction: "horizontal" | "vertical";
}

export interface ICheckbox {
  label: string;
  value: string;
  isChecked: boolean;
}
