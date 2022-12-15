import { ReactNode } from 'react';

type Locale = "fr" | "en" | "ar-tn" | "ar-sa" | "ar-ma" | "ru";
type DateFormat = "YYYY/MM/DD" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YY/DD/MM";
interface Option {
    value: string;
    label: string;
}
type Field = {
    label?: string;
    defaultValue?: string;
    isHidden?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isTouched?: boolean;
    isDisabled?: boolean;
    error?: string;
    isWithRequiredStar?: boolean;
    onValueChange?: (e: string | string[] | Date | File) => void;
    locale?: Locale;
    dateFormat?: DateFormat;
    isAmPm?: boolean;
    type: string;
    name: string;
    placeholder?: string;
    maxLength?: number;
    isMultiline?: boolean;
    minRows?: number;
    options?: Option[];
    direction: "horizontal" | "vertical";
    maxSize?: number;
    isLoading?: boolean;
    onEyeIconClicked?: () => void;
};

type Schema = {
    fields: Field[];
    onSubmit: (e: unknown) => void;
    submitButtonLabel: string;
    placement: number[] | number[][];
    fieldMinWidth: number;
    fieldRightMargin: number;
};

interface Props {
    schema: Schema;
    children?: ReactNode;
}

declare const Index: {
    ({ schema, children }: Props): JSX.Element;
    defaultProps: {
        schema: {
            submitButtonLabel: string;
            resetButtonLabel: string;
            fieldMinWidth: number;
            fieldRightMargin: number;
            placement: never[];
            fields: ({
                type: string;
                name: string;
                label: string;
                placeholder: string;
                options?: undefined;
            } | {
                type: string;
                name: string;
                label: string;
                options: {
                    value: string;
                    label: string;
                }[];
                placeholder?: undefined;
            })[];
        };
    };
};

export { Index as default };
