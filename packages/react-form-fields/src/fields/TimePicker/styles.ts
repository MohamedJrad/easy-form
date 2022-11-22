import styled from "styled-components";
import { TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const LabelWrapper = styled.div`
  display: flex;
`;
export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;

export const StyledTextField = styled(TextField)`
  background-color: white;
  /* & .MuiInputBase-formControl{
  background-color: yellow;
  height:10px
 } */

  & .MuiInputBase-input {
    height: 0px;
  }
  & label.Mui-focused {
    color: white;
  }
  & .MuiInputBase-input {
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    min-height: 50px;

    & fieldset {
      border-radius: 5px;
      border-color: #38444880;
      border-width: 1px;
    }
    &:hover fieldset {
      border-color: #1d292e;
      border-width: 2px;
    }
    &.Mui-focused fieldset {
      border-color: #1d292e;
    }
  }
`;

export const StyledMobileDatePicker = styled(MobileDatePicker)`
  & * {
    cursor: pointer;
  }
`;
export const ErrorMessageWrapper = styled.div`
  margin: 5px 0 8px 0;
  height: 10px;
`;
export const ErrorMessage = styled.span`
  color: red;
`;
