/* eslint-disable  react/jsx-no-duplicate-props */
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import "dayjs/locale/ru";
import "dayjs/locale/ar-sa";
import "dayjs/locale/ar-tn";
import "dayjs/locale/ar-ma";
import "dayjs/locale/fr";
import { ErrorMessage, FieldContainer, FieldLabel } from "../../atoms";
import { useLogic } from "./useLogic";
//import { StyledTextField } from './styles'
import { Props } from "./types";
import { defaultProps } from "./defaultProps";

const Index = ({
  label,
  isHidden,
  // isReadOnly,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  onValueChange,
  locale,
}: // dateFormat,
Props) => {
  // const { handleDateChange, selectedDate } = useLogic({ onValueChange })

  return (
    <FieldContainer isHidden={isHidden}>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
          <Stack spacing={3}>
            {/* <DesktopDatePicker
              inputFormat={dateFormat}
              value={selectedDate}
              //onChange={handleDateChange}
              renderInput={({ InputProps, inputProps, inputRef }) => (
                <StyledTextField
                  InputProps={InputProps}
                  inputProps={inputProps}
                  inputRef={inputRef}
                />
              )}
            /> */}
          </Stack>
        </LocalizationProvider>
      </div>

      <ErrorMessage error={error} isTouched={isTouched} />
    </FieldContainer>
  );
};
Index.defaultProps = defaultProps;

export default Index;
