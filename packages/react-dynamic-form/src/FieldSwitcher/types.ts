type Locale = "fr" | "en" | "ar-tn" | "ar-sa" | "ar-ma" | "ru";
type DateFormat = "YYYY/MM/DD" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YY/DD/MM";
interface Option {
  value: string;
  label: string;
}

type Field = {
  label: string;
  defaultValue?: string;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  isWithRequiredStar?: boolean;
  onValueChange?: (e: string | string[] | Date | File) => void;
  locale: Locale;
  dateFormat: DateFormat;
  isAmPm?: boolean;
  type: string;
  name: string;
  placeholder?: string;
  maxLength: number;
  isMultiline?: boolean;
  minRows?: number;
  options?: Option[];
  direction: "horizontal" | "vertical";
  maxSize?: number;
  isLoading?: boolean;
  onEyeIconClicked: () => void;
};

type Meta = {
  error?: string;
  touched?: boolean;
};

export interface Props {
  field: Field;
  meta: Meta;
}
