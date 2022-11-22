type Locale = "fr" | "en" | "ar-tn" | "ar-sa" | "ar-ma" | "ru";

export interface Props {
  label: string;
  defaultValue?: string;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  isWithRequiredStar?: boolean;
  onValueChange?: (e: string) => void;
  locale: Locale;
  isAmPm?: boolean;
}
