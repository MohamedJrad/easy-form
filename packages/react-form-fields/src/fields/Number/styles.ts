import styled from 'styled-components'
import { TextField } from '@mui/material'
// import PhoneInput from 'react-phone-input-2'
//import PhoneInput from "../../atoms/react-phone-input-2";

export const StyledPhoneInput = styled.div`
  &&& {
    .form-control {
      height: 56px;
      width: 100%;
      border-color: #38444880;
      padding-left: 20px;
      font-size: 16px;
    }

    .form-control:focus {
      box-shadow: 0 0 0 2px #1d292e;
    }
    .form-control:hover {
      box-shadow: 0 0 0 2px #1d292e;
    }
    .selected-flag {
      display: none;
    }
  }
`
export const StyledTextField = styled(TextField)`
  background-color: white;
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    // height: 55px;
    & fieldset {
      border-radius: 5px;
      border-color: #1d292e;
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
`
