// src/atoms/FieldLabel/defaultProps.ts
var defaultProps = {
  label: "Label",
  isRequired: false,
  isWithRequiredStar: false
};

// src/atoms/FieldLabel/styles.ts
import styled from "styled-components";
var LabelWrapper = styled.div`
  display: flex;
`;
var StyledLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;

// src/atoms/FieldLabel/FieldLabel.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Index = ({ label, isRequired, isWithRequiredStar }) => {
  return /* @__PURE__ */ jsxs(LabelWrapper, {
    children: [
      /* @__PURE__ */ jsx(StyledLabel, {
        htmlFor: label,
        children: label
      }),
      isRequired && isWithRequiredStar && label && /* @__PURE__ */ jsx("div", {
        style: { color: "red" },
        children: "*"
      })
    ]
  });
};
Index.defaultProps = defaultProps;
var FieldLabel_default = Index;

// src/atoms/FieldLabel/index.tsx
var FieldLabel_default2 = FieldLabel_default;

// src/atoms/ErrorMessage/defaultProps.ts
var defaultProps2 = {
  error: "Error Message !",
  isTouched: true
};

// src/atoms/ErrorMessage/styles.ts
import styled2 from "styled-components";
var ErrorMessageWrapper = styled2.div`
  margin: 5px 0 8px 0;
  height: 10px;
`;
var ErrorMessage = styled2.span`
  color: red;
`;

// src/atoms/ErrorMessage/ErrorMessage.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Index2 = ({ error, isTouched }) => {
  return /* @__PURE__ */ jsx2(ErrorMessageWrapper, {
    children: isTouched && error && /* @__PURE__ */ jsx2(ErrorMessage, {
      children: error
    })
  });
};
Index2.defaultProps = defaultProps2;
var ErrorMessage_default = Index2;

// src/atoms/ErrorMessage/index.tsx
var ErrorMessage_default2 = ErrorMessage_default;

// src/atoms/FieldContainer/defaultProps.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Child = () => {
  return /* @__PURE__ */ jsx3("div", {
    style: { width: "100%", height: "90px", background: "red" }
  });
};
var defaultProps3 = {
  isHidden: false,
  children: /* @__PURE__ */ jsx3(Child, {})
};

// src/atoms/FieldContainer/styles.ts
import styled3 from "styled-components";
var Container = styled3.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

// src/atoms/FieldContainer/FieldContainer.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Index3 = ({ isHidden, children }) => {
  return /* @__PURE__ */ jsx4("div", {
    children: !isHidden && /* @__PURE__ */ jsx4(Container, {
      children
    })
  });
};
Index3.defaultProps = defaultProps3;
var FieldContainer_default = Index3;

// src/atoms/FieldContainer/index.tsx
var FieldContainer_default2 = FieldContainer_default;

// src/atoms/SubmitButton/styles.ts
import styled4 from "styled-components";
var StyledButton = styled4.button`
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
  height: 40px;
  min-width: 130px;
  line-height: 28px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ea0000;
  color: white;
  border-color: transparent;
  &:hover {
    /* border-width: 5px; */
    border-color: #c40000;
    background-color: #c40000;
  }
`;

// src/atoms/SubmitButton/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";

// src/fields/Input/defaultProps.ts
var defaultProps4 = {
  type: "text",
  name: "firstName",
  label: "first Name",
  placeholder: "first name",
  isRequired: false,
  defaultValue: "",
  isReadOnly: false,
  isHidden: false,
  error: "default error message",
  isTouched: false,
  maxLength: 30,
  isMultiline: false,
  minRows: 1
};

// src/fields/Input/helpers/useLogic/index.ts
import { useState, useEffect } from "react";

// src/fields/Input/helpers/handleValue/index.ts
var handleValue = ({ value, type, maxLength }) => {
  if (type === "number") {
    const numberValue = Math.max(0, Number(value)).toString().slice(0, maxLength);
    return numberValue;
  }
  return value.toString().slice(0, maxLength) || "";
};

// src/fields/Input/helpers/useLogic/index.ts
var useLogic = ({
  type,
  defaultValue,
  maxLength,
  onValueChange
}) => {
  const [value, setValue] = useState(defaultValue || "");
  const handleChange = (event) => {
    setValue(handleValue({ value: event.target.value, type, maxLength }));
  };
  useEffect(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value, onValueChange]);
  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);
  return { handleChange, value };
};

// src/fields/Input/styles.ts
import styled5 from "styled-components";
import { TextField } from "@mui/material";
var StyledTextField = styled5(TextField)`
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

// src/fields/Input/Input.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var Index4 = ({
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
  minRows
}) => {
  const { value, handleChange } = useLogic({
    type,
    defaultValue,
    maxLength,
    onValueChange
  });
  return /* @__PURE__ */ jsxs2(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ jsx6(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsx6(StyledTextField, {
        type,
        name,
        placeholder,
        value,
        error: isTouched && !!error,
        disabled: isDisabled,
        multiline: isMultiline,
        minRows,
        onChange: handleChange,
        InputProps: {
          readOnly: isReadOnly
        },
        sx: {
          "& legend": { display: "none" },
          "& fieldset": { top: 0 }
        }
      }),
      /* @__PURE__ */ jsx6(ErrorMessage_default2, {
        error: error || "",
        isTouched
      })
    ]
  });
};
Index4.defaultProps = defaultProps4;
var Input_default = Index4;

// src/fields/Input/index.tsx
var Input_default2 = Input_default;

// src/fields/Select/Select.tsx
import MenuItem from "@mui/material/MenuItem";

// src/fields/Select/useLogic.ts
import { useState as useState2, useEffect as useEffect2 } from "react";
var useLogic2 = ({ defaultValue, onValueChange }) => {
  const [value, setValue] = useState2(defaultValue || "");
  const handleChange = (event) => {
    if (event.target.value !== "") {
      setValue(event.target.value);
    }
  };
  useEffect2(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);
  useEffect2(() => {
    if (typeof onValueChange === "function") {
      if (value !== "") {
        onValueChange(value);
      }
    }
  }, [value, onValueChange]);
  return { value, handleChange };
};

// src/fields/Select/styles.ts
import styled6 from "styled-components";
import TextField2 from "@material-ui/core/TextField";
var Container2 = styled6.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
var LabelWrapper2 = styled6.div`
  display: flex;
`;
var StyledLabel2 = styled6.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;
var StyledTextField2 = styled6(TextField2)`
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
var ErrorMessageWrapper2 = styled6.div`
  margin: 5px 0 8px 0;
  height: 10px;
`;
var ErrorMessage2 = styled6.span`
  color: red;
`;

// src/fields/Select/defaultProps.ts
var options = [
  { value: "1", label: "option1" },
  { value: "2", label: "option2" },
  { value: "3", label: "option3" }
];
var defaultProps5 = {
  name: "select",
  label: "Select",
  isRequired: false,
  isReadOnly: false,
  isHidden: false,
  error: "error message",
  isTouched: false,
  options,
  isWithRequiredStar: false
};

// src/fields/Select/Select.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Index5 = ({
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
  options: options4
}) => {
  const { handleChange, value } = useLogic2({
    onValueChange,
    defaultValue
  });
  return /* @__PURE__ */ jsxs3(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ jsx7(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsxs3(StyledTextField2, {
        name,
        disabled: isDisabled,
        value,
        onChange: handleChange,
        select: true,
        InputLabelProps: { shrink: false },
        SelectProps: {
          MenuProps: {}
        },
        margin: "normal",
        variant: "outlined",
        error: isTouched && !!error,
        children: [
          placeholder && /* @__PURE__ */ jsx7(MenuItem, {
            value: "",
            disabled: true,
            children: placeholder
          }),
          options4?.map((option) => /* @__PURE__ */ jsx7(MenuItem, {
            value: option.value,
            children: option.label
          }, option.value))
        ]
      }),
      /* @__PURE__ */ jsx7(ErrorMessage_default2, {
        error,
        isTouched
      })
    ]
  });
};
Index5.defaultProps = defaultProps5;
var Select_default = Index5;

// src/fields/Select/index.tsx
var Select_default2 = Select_default;

// src/fields/CheckboxGroup/CheckboxGroup.tsx
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// src/fields/CheckboxGroup/styles.ts
import styled7 from "styled-components";
var GroupWrapper = styled7.div`
  display: flex;
  flex-direction: ${({ direction }) => direction === "vertical" ? "column" : "row"};
  flex-wrap: wrap;
  label {
    height: fit-content;
    margin: 0;
  }
`;

// src/fields/CheckboxGroup/defaultProps.ts
var options2 = [
  { value: "1", label: "option1" },
  { value: "2", label: "option2" },
  { value: "3", label: "option3" }
];
var defaultProps6 = {
  name: "radioGroup",
  label: "Radio Group",
  isRequired: false,
  isReadOnly: false,
  isHidden: false,
  isMultiple: true,
  error: false,
  isTouched: false,
  errorMessage: "this field is required",
  options: options2,
  direction: "vertical"
};

// src/fields/CheckboxGroup/useLogic.ts
import { useState as useState3, useEffect as useEffect3 } from "react";
var useLogic3 = (options4, onValueChange) => {
  const [value, setValue] = useState3([]);
  const [checkboxGroup, setCheckboxGroup] = useState3({});
  const handleChange = (event) => {
    setCheckboxGroup({
      ...checkboxGroup,
      [event.target.name]: {
        isChecked: event.target.checked,
        value: event.target.value,
        label: event.target.name
      }
    });
  };
  useEffect3(() => {
    const group = {
      isChecked: false,
      value: "",
      label: ""
    };
    options4?.forEach((element) => {
      group[element.label] = {
        isChecked: false,
        value: element.value,
        label: element.label
      };
    });
    setCheckboxGroup(group);
  }, [options4]);
  useEffect3(() => {
    const checkedValues = [];
    const asArray = Object.entries(checkboxGroup);
    asArray.forEach((e) => {
      if (e[1].isChecked === true) {
        checkedValues.push(e[1].value);
      }
    });
    setValue(checkedValues);
  }, [checkboxGroup]);
  useEffect3(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value, onValueChange]);
  return { handleChange };
};

// src/fields/CheckboxGroup/CheckboxGroup.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var Index6 = ({
  name,
  label,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  onValueChange,
  options: options4,
  direction
}) => {
  const { handleChange } = useLogic3(options4, onValueChange);
  return /* @__PURE__ */ jsxs4(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ jsx8(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsx8(FormGroup, {
        onChange: handleChange,
        children: /* @__PURE__ */ jsx8(GroupWrapper, {
          direction,
          children: options4?.map((option) => /* @__PURE__ */ jsx8(FormControlLabel, {
            name,
            value: option.value,
            control: /* @__PURE__ */ jsx8(Checkbox, {
              name: option.label,
              sx: {
                color: "#1D292E",
                "&.Mui-checked": {
                  color: "#1D292E"
                }
              }
            }),
            label: option.label
          }, option.label))
        })
      }),
      /* @__PURE__ */ jsx8(ErrorMessage_default2, {
        error,
        isTouched
      })
    ]
  });
};
Index6.defaultProps = defaultProps6;
var CheckboxGroup_default = Index6;

// src/fields/CheckboxGroup/index.tsx
var CheckboxGroup_default2 = CheckboxGroup_default;

// src/fields/RadioGroup/RadioGroup.tsx
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel2 from "@mui/material/FormControlLabel";

// src/fields/RadioGroup/useLogic.ts
import { useState as useState4, useEffect as useEffect4 } from "react";
var useLogic4 = ({ options: options4, defaultValue, onValueChange }) => {
  const [value, setValue] = useState4(
    defaultValue || { value: "", label: "" }
  );
  const handleChange = (event) => {
    const selectedOption = options4?.filter(
      (option) => option.value === event.target.value
    )[0];
    setValue(selectedOption || { value: "option1", label: "option1" });
  };
  useEffect4(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value?.value);
    }
  }, [value, onValueChange]);
  return { handleChange };
};

// src/fields/RadioGroup/styles.ts
import styled8 from "styled-components";
var RadioWrapper = styled8.div`
  display: flex;
  flex-direction: ${({ direction }) => direction === "vertical" ? "column" : "row"};

  label {
    height: fit-content;
    margin: 0;
  }
`;

// src/fields/RadioGroup/defaultProps.ts
var options3 = [
  { value: "1", label: "option1" },
  { value: "2", label: "option2" },
  { value: "3", label: "option3" }
];
var defaultProps7 = {
  name: "radioGroup",
  label: "Radio Group",
  required: true,
  isReadOnly: false,
  isHidden: false,
  error: "Error message",
  isTouched: false,
  options: options3,
  direction: "vertical",
  withRequiredStar: true
};

// src/fields/RadioGroup/RadioGroup.tsx
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var Index7 = ({
  name,
  label,
  defaultValue,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  onValueChange,
  options: options4,
  direction
}) => {
  const { handleChange } = useLogic4({ defaultValue, onValueChange, options: options4 });
  return /* @__PURE__ */ jsxs5(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ jsx9(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsx9(RadioGroup, {
        "aria-labelledby": "demo-radio-buttons-group-label",
        defaultValue: "female",
        name,
        onChange: handleChange,
        children: /* @__PURE__ */ jsx9(RadioWrapper, {
          direction,
          children: options4?.map((option) => /* @__PURE__ */ jsx9(FormControlLabel2, {
            value: option.value,
            control: /* @__PURE__ */ jsx9(Radio, {
              sx: {
                color: "#1D292E",
                "&.Mui-checked": {
                  color: "#1D292E"
                }
              }
            }),
            label: option.label
          }, option.label))
        })
      }),
      /* @__PURE__ */ jsx9(ErrorMessage_default2, {
        error,
        isTouched
      })
    ]
  });
};
Index7.defaultProps = defaultProps7;
var RadioGroup_default = Index7;

// src/fields/RadioGroup/index.tsx
var RadioGroup_default2 = RadioGroup_default;

// src/fields/FileSelector/styles.ts
import styled9 from "styled-components";
import { RemoveCircleOutline } from "@styled-icons/material/RemoveCircleOutline";
import { Upload } from "@styled-icons/boxicons-regular/Upload";
import { EyeOutline } from "@styled-icons/evaicons-outline/EyeOutline";
var Container3 = styled9.div`
  margin-bottom: 20px;
`;
var DropArea = styled9.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
  padding: 0 20px;
`;
var Wrapper = styled9.div`
  border-radius: 5px;
  position: relative;
  background-color: #f8f8f8;

  border: 1px solid ${({ error }) => error ? "red" : "#1d292e"};
  height: 60px;
  width: 100%;
  &:hover {
    border: 1px dashed ${({ error }) => error ? "red" : "#1d292e"};
  }
`;
var Info = styled9.div`
  align-items: center;
  overflow: hidden;

  flex-grow: 1;
  padding: 0 20px;
  display: flex;

  text-align: center;
`;
var Text = styled9.span`
  width: 100%;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var UploadButton = styled9.button`
  &&& {
    height: 35px;
    width: 35px;
    margin-right: 20px;
    background-color: #1d292e;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    border-radius: 6px;
    cursor: pointer;
  }
`;
var RemoveIcon = styled9(RemoveCircleOutline)`
  &&& {
    color: #8b9193;
    height: 30px;
    width: 30px;
    min-width: 30px;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
var UploadIcon = styled9(Upload)`
  &&& {
    color: white;
    height: 25px;
    width: 25px;
  }
`;
var EyeIcon = styled9(EyeOutline)`
  &&& {
    color: #1d292e;
    height: 30px;
    width: 30px;
    min-width: 30px;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
var LabelWrapper3 = styled9.div`
  display: flex;
`;
var StyledLabel3 = styled9.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;
var LoaderWrapper = styled9.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

// src/fields/FileSelector/defaultProps.ts
var defaultProps8 = {
  label: "File Selector",
  placeholder: `"Drag & Drop or Click to Browse"`,
  isRequired: false,
  defaultValue: "",
  isReadOnly: false,
  isHidden: false,
  error: "Error message",
  isTouched: false,
  maxSize: 5
};

// src/fields/FileSelector/FileSelector.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var Index8 = ({
  label,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar
}) => {
  return /* @__PURE__ */ jsxs6(FieldContainer_default2, {
    children: [
      /* @__PURE__ */ jsx10(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsx10(Wrapper, {
        error: isTouched && !!error || false
      }),
      /* @__PURE__ */ jsx10(ErrorMessage_default2, {
        error,
        isTouched
      })
    ]
  });
};
Index8.defaultProps = defaultProps8;
var FileSelector_default = Index8;

// src/fields/FileSelector/index.tsx
var FileSelector_default2 = FileSelector_default;

// src/fields/DatePicker/DatePicker.tsx
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import "dayjs/locale/ar-sa";
import "dayjs/locale/ar-tn";
import "dayjs/locale/ar-ma";
import "dayjs/locale/fr";

// src/fields/DatePicker/defaultProps.ts
var defaultProps9 = {
  type: "datePicker",
  label: "Date Picker",
  required: false,
  defaultValue: "",
  readOnly: false,
  hidden: false,
  multiple: true,
  error: "default error message",
  isTouched: false,
  withRequiredStar: true,
  locale: "en",
  dateFormat: "MM/DD/YYYY",
  isAmPm: false
};

// src/fields/DatePicker/DatePicker.tsx
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var Index9 = ({
  label,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  onValueChange,
  locale
}) => {
  return /* @__PURE__ */ jsxs7(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ jsx11(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsx11("div", {
        children: /* @__PURE__ */ jsx11(LocalizationProvider, {
          dateAdapter: AdapterDayjs,
          adapterLocale: locale,
          children: /* @__PURE__ */ jsx11(Stack, {
            spacing: 3
          })
        })
      }),
      /* @__PURE__ */ jsx11(ErrorMessage_default2, {
        error,
        isTouched
      })
    ]
  });
};
Index9.defaultProps = defaultProps9;
var DatePicker_default = Index9;

// src/fields/DatePicker/index.tsx
var DatePicker_default2 = DatePicker_default;

// src/fields/TimePicker/TimePicker.tsx
import Stack2 from "@mui/material/Stack";
import { LocalizationProvider as LocalizationProvider2 } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as AdapterDayjs2 } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import "dayjs/locale/ar-sa";
import "dayjs/locale/ar-tn";
import "dayjs/locale/ar-ma";
import "dayjs/locale/fr";

// src/fields/TimePicker/defaultProps.ts
var defaultProps10 = {
  type: "datePicker",
  label: "Date Picker",
  required: false,
  defaultValue: "",
  readOnly: false,
  hidden: false,
  multiple: true,
  error: "default error message",
  touched: false,
  withRequiredStar: true,
  locale: "en",
  dateFormat: "MM/DD/YYYY",
  isAmPm: false
};

// src/fields/TimePicker/TimePicker.tsx
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var Index10 = ({
  label,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  locale
}) => {
  return /* @__PURE__ */ jsxs8(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ jsx12(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsx12(LocalizationProvider2, {
        dateAdapter: AdapterDayjs2,
        adapterLocale: locale,
        children: /* @__PURE__ */ jsx12(Stack2, {
          spacing: 3
        })
      }),
      /* @__PURE__ */ jsx12(ErrorMessage_default2, {
        error,
        isTouched
      })
    ]
  });
};
Index10.defaultProps = defaultProps10;
var TimePicker_default = Index10;

// src/fields/TimePicker/index.tsx
var TimePicker_default2 = TimePicker_default;

// src/fields/Number/defaultProps.ts
var defaultProps11 = {
  type: "text",
  name: "firstName",
  label: "first Name",
  placeholder: "",
  isRequired: false,
  defaultValue: "",
  isReadOnly: false,
  isHidden: false,
  error: "default error message",
  isTouched: false,
  maxLength: 8,
  requiredStar: true,
  max: 999,
  min: 0,
  isMultiline: false,
  minRows: 1
};

// src/fields/Number/Number.tsx
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var Index11 = ({
  label,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar
}) => {
  return /* @__PURE__ */ jsxs9(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ jsx13(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ jsx13("div", {}),
      /* @__PURE__ */ jsx13(ErrorMessage_default2, {
        error: error || "",
        isTouched
      })
    ]
  });
};
Index11.defaultProps = defaultProps11;
var Number_default = Index11;

// src/fields/Number/index.tsx
var Number_default2 = Number_default;
export {
  CheckboxGroup_default2 as CheckboxGroup,
  DatePicker_default2 as DatePicker,
  FileSelector_default2 as FileSelector,
  Input_default2 as Input,
  Number_default2 as Number,
  RadioGroup_default2 as RadioGroup,
  Select_default2 as Select,
  TimePicker_default2 as TimePicker
};
