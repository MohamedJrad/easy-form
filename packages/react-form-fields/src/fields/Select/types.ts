interface Option {
  value: string;
  label: string;
}

export interface Props {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  isWithRequiredStar?: boolean;
  options?: Option[];
  onValueChange?: (e: string) => void;
}

export interface ILogic {
  defaultValue?: string;
  onValueChange?: (e: string) => void;
}
