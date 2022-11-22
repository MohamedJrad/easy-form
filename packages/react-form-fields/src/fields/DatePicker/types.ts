type Locale = "fr" | "en" | "ar-tn" | "ar-sa" | "ar-ma" | "ru";

type DateFormat = "YYYY/MM/DD" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YY/DD/MM";

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
  onValueChange?: (e: Date) => void;
  locale: Locale;
  dateFormat: DateFormat;
  isAmPm?: boolean;
}
