import styled from "styled-components";
import { TextField } from "@mui/material";

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
