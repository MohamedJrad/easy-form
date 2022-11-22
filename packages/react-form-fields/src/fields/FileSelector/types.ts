export interface Props {
  label: any;
  placeholder?: string;
  defaultValue?: string;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  maxSize?: number;
  isLoading?: boolean;
  isWithRequiredStar?: boolean;
  onEyeIconClicked: () => void;
  onValueChange: (e: File | string) => void;
}
