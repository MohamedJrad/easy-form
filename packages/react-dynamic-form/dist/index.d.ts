import { ReactNode } from 'react';

interface Props {
    fields?: unknown[];
    onSubmit?: (e: unknown) => void;
    submitButtonLabel?: string;
    placement?: number[] | number[][];
    fieldMinWidth?: number;
    fieldRightMargin?: number;
    children?: ReactNode;
}

declare const Index: {
    ({ fields, onSubmit, submitButtonLabel, placement, fieldMinWidth, fieldRightMargin, children, }: Props): JSX.Element;
    defaultProps: {
        submitButtonLabel: string;
        resetButtonLabel: string;
        fieldMinWidth: number;
        fieldRightMargin: number;
        placement: never[];
        theme: {};
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
            placeholder?: undefined;
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

export { Index as default };
