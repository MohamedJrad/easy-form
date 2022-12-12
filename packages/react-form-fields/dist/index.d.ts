type InputType = "text" | "number" | "email" | "password";
interface Props$7 {
  type: InputType | string;
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
  maxLength: number;
  isWithRequiredStar?: boolean;
  onValueChange?: (e: string) => void;
  isMultiline?: boolean;
  minRows?: number;
}

declare const Index$7: {
  ({
    type,
    name,
    label,
    placeholder,
    defaultValue,
    isHidden,
    isReadOnly,
    isRequired,
    isTouched,
    isDisabled,
    error,
    maxLength,
    isWithRequiredStar,
    onValueChange,
    isMultiline,
    minRows,
  }: Props$7): JSX.Element;
  defaultProps: Props$7;
};

interface Option$2 {
  value: string;
  label: string;
}
interface Props$6 {
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
  options?: Option$2[];
  onValueChange?: (e: string) => void;
}

declare const Index$6: {
  ({
    name,
    label,
    placeholder,
    defaultValue,
    isHidden,
    isRequired,
    isTouched,
    isDisabled,
    error,
    isWithRequiredStar,
    onValueChange,
    options,
  }: Props$6): JSX.Element;
  defaultProps: {
    name: string;
    label: string;
    isRequired: boolean;
    isReadOnly: boolean;
    isHidden: boolean;
    error: string;
    isTouched: boolean;
    options: {
      value: string;
      label: string;
    }[];
    isWithRequiredStar: boolean;
  };
};

interface Option$1 {
  value: string;
  label: string;
}
interface Props$5 {
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
  options?: Option$1[];
  onValueChange?: (e: string[]) => void;
  direction: "horizontal" | "vertical";
}

declare const Index$5: {
  ({
    name,
    label,
    isHidden,
    isRequired,
    isTouched,
    error,
    isWithRequiredStar,
    onValueChange,
    options,
    direction,
  }: Props$5): JSX.Element;
  defaultProps: {
    name: string;
    label: string;
    isRequired: boolean;
    isReadOnly: boolean;
    isHidden: boolean;
    isMultiple: boolean;
    error: boolean;
    isTouched: boolean;
    errorMessage: string;
    options: {
      value: string;
      label: string;
    }[];
    direction: string;
  };
};

interface Option {
  value: string;
  label: string;
}
interface Props$4 {
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
  onValueChange?: (e: string) => void;
  direction: "horizontal" | "vertical";
}

declare const Index$4: {
  ({
    name,
    label,
    defaultValue,
    isHidden,
    isRequired,
    isTouched,
    error,
    isWithRequiredStar,
    onValueChange,
    options,
    direction,
  }: Props$4): JSX.Element;
  defaultProps: {
    name: string;
    label: string;
    required: boolean;
    isReadOnly: boolean;
    isHidden: boolean;
    error: string;
    isTouched: boolean;
    options: {
      value: string;
      label: string;
    }[];
    direction: string;
    withRequiredStar: boolean;
  };
};

interface Props$3 {
  label: string;
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
  onEyeIconClicked?: () => void;
  onValueChange?: (e: File | string) => void;
}

declare const Index$3: {
  ({
    label,
    isRequired,
    isTouched,
    error,
    isWithRequiredStar,
  }: Props$3): JSX.Element;
  defaultProps: Props$3;
};

type Locale$1 = "fr" | "en" | "ar-tn" | "ar-sa" | "ar-ma" | "ru";
type DateFormat = "YYYY/MM/DD" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YY/DD/MM";
interface Props$2 {
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
  locale: Locale$1;
  dateFormat: DateFormat;
  isAmPm?: boolean;
}

declare const Index$2: {
  ({
    label,
    isHidden,
    isRequired,
    isTouched,
    error,
    isWithRequiredStar,
    onValueChange,
    locale,
  }: Props$2): JSX.Element;
  defaultProps: {
    type: string;
    label: string;
    required: boolean;
    defaultValue: string;
    readOnly: boolean;
    hidden: boolean;
    multiple: boolean;
    error: string;
    isTouched: boolean;
    withRequiredStar: boolean;
    locale: string;
    dateFormat: string;
    isAmPm: boolean;
  };
};

type Locale = "fr" | "en" | "ar-tn" | "ar-sa" | "ar-ma" | "ru";
interface Props$1 {
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

declare const Index$1: {
  ({
    label,
    isHidden,
    isRequired,
    isTouched,
    error,
    isWithRequiredStar,
    locale,
  }: Props$1): JSX.Element;
  defaultProps: {
    type: string;
    label: string;
    required: boolean;
    defaultValue: string;
    readOnly: boolean;
    hidden: boolean;
    multiple: boolean;
    error: string;
    touched: boolean;
    withRequiredStar: boolean;
    locale: string;
    dateFormat: string;
    isAmPm: boolean;
  };
};

interface Props {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  maxLength: number;
  isWithRequiredStar?: boolean;
  onValueChange?: (e: string) => void;
  isMultiline?: boolean;
  minRows?: number;
}

declare const Index: {
  ({
    label,
    isHidden,
    isRequired,
    isTouched,
    error,
    isWithRequiredStar,
  }: Props): JSX.Element;
  defaultProps: {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    isRequired: boolean;
    defaultValue: string;
    isReadOnly: boolean;
    isHidden: boolean;
    error: string;
    isTouched: boolean;
    maxLength: number;
    requiredStar: boolean;
    max: number;
    min: number;
    isMultiline: boolean;
    minRows: number;
  };
};

export {
  Index$5 as CheckboxGroup,
  Index$2 as DatePicker,
  Index$3 as FileSelector,
  Index$7 as Input,
  Index as Number,
  Index$4 as RadioGroup,
  Index$6 as Select,
  Index$1 as TimePicker,
};
