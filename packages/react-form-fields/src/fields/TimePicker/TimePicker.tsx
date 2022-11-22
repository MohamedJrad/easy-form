/* eslint-disable  react/jsx-no-duplicate-props */
import React from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import "dayjs/locale/ru";
import "dayjs/locale/ar-sa";
import "dayjs/locale/ar-tn";
import "dayjs/locale/ar-ma";
import "dayjs/locale/fr";
import { ErrorMessage, FieldContainer, FieldLabel } from "../../atoms";
import { StyledTextField } from "./styles";
import { Props } from "./types";
import { defaultProps } from "./defaultProps";
import { useLogic } from "./useLogic";

const Index = ({
  label,
  isHidden,
  // isReadOnly,
  isRequired,
  isTouched,
  // isDisabled,
  error,
  isWithRequiredStar,
  onValueChange,
  locale,
  isAmPm,
}: Props) => {
  const { handleTimeChange, selectedTime } = useLogic({ onValueChange });

  return (
    <FieldContainer isHidden={isHidden}>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
        <Stack spacing={3}>
          <TimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            renderInput={({ InputProps, inputProps, inputRef }) => (
              <StyledTextField
                InputProps={InputProps}
                inputProps={inputProps}
                inputRef={inputRef}
              />
            )}
            ampm={isAmPm}
          />
        </Stack>
      </LocalizationProvider>
      <ErrorMessage error={error} isTouched={isTouched} />
    </FieldContainer>
  );
};
Index.defaultProps = defaultProps;

export default Index;
