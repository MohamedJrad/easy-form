"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var react_form_fields_exports = {};
__export(react_form_fields_exports, {
  CheckboxGroup: () => CheckboxGroup_default2,
  DatePicker: () => DatePicker_default2,
  FileSelector: () => FileSelector_default2,
  Input: () => Input_default2,
  Number: () => Number_default2,
  RadioGroup: () => RadioGroup_default2,
  Select: () => Select_default2,
  TimePicker: () => TimePicker_default2
});
module.exports = __toCommonJS(react_form_fields_exports);

// src/atoms/FieldLabel/defaultProps.ts
var defaultProps = {
  label: "Label",
  isRequired: false,
  isWithRequiredStar: false
};

// src/atoms/FieldLabel/styles.ts
var import_styled_components = __toESM(require("styled-components"));
var LabelWrapper = import_styled_components.default.div`
  display: flex;
`;
var StyledLabel = import_styled_components.default.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;

// src/atoms/FieldLabel/FieldLabel.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Index = ({ label, isRequired, isWithRequiredStar }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LabelWrapper, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLabel, {
        htmlFor: label,
        children: label
      }),
      isRequired && isWithRequiredStar && label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
var import_styled_components2 = __toESM(require("styled-components"));
var ErrorMessageWrapper = import_styled_components2.default.div`
  margin: 5px 0 8px 0;
  height: 10px;
`;
var ErrorMessage = import_styled_components2.default.span`
  color: red;
`;

// src/atoms/ErrorMessage/ErrorMessage.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Index2 = ({ error, isTouched }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ErrorMessageWrapper, {
    children: isTouched && error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ErrorMessage, {
      children: error
    })
  });
};
Index2.defaultProps = defaultProps2;
var ErrorMessage_default = Index2;

// src/atoms/ErrorMessage/index.tsx
var ErrorMessage_default2 = ErrorMessage_default;

// src/atoms/FieldContainer/defaultProps.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Child = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
    style: { width: "100%", height: "90px", background: "red" }
  });
};
var defaultProps3 = {
  isHidden: false,
  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Child, {})
};

// src/atoms/FieldContainer/styles.ts
var import_styled_components3 = __toESM(require("styled-components"));
var Container = import_styled_components3.default.div`
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var Index3 = ({ isHidden, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
    children: !isHidden && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Container, {
      children
    })
  });
};
Index3.defaultProps = defaultProps3;
var FieldContainer_default = Index3;

// src/atoms/FieldContainer/index.tsx
var FieldContainer_default2 = FieldContainer_default;

// src/atoms/SubmitButton/styles.ts
var import_styled_components4 = __toESM(require("styled-components"));
var StyledButton = import_styled_components4.default.button`
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
var import_jsx_runtime5 = require("react/jsx-runtime");

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
var import_react = require("react");

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
  const [value, setValue] = (0, import_react.useState)(defaultValue || "");
  const handleChange = (event) => {
    setValue(handleValue({ value: event.target.value, type, maxLength }));
  };
  (0, import_react.useEffect)(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value, onValueChange]);
  (0, import_react.useEffect)(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);
  return { handleChange, value };
};

// src/fields/Input/styles.ts
var import_styled_components5 = __toESM(require("styled-components"));
var import_material = require("@mui/material");
var StyledTextField = (0, import_styled_components5.default)(import_material.TextField)`
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
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledTextField, {
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
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ErrorMessage_default2, {
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
var import_MenuItem = __toESM(require("@mui/material/MenuItem"));

// src/fields/Select/useLogic.ts
var import_react2 = require("react");
var useLogic2 = ({ defaultValue, onValueChange }) => {
  const [value, setValue] = (0, import_react2.useState)(defaultValue || "");
  const handleChange = (event) => {
    if (event.target.value !== "") {
      setValue(event.target.value);
    }
  };
  (0, import_react2.useEffect)(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);
  (0, import_react2.useEffect)(() => {
    if (typeof onValueChange === "function") {
      if (value !== "") {
        onValueChange(value);
      }
    }
  }, [value, onValueChange]);
  return { value, handleChange };
};

// src/fields/Select/styles.ts
var import_styled_components6 = __toESM(require("styled-components"));
var import_TextField = __toESM(require("@material-ui/core/TextField"));
var Container2 = import_styled_components6.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
var LabelWrapper2 = import_styled_components6.default.div`
  display: flex;
`;
var StyledLabel2 = import_styled_components6.default.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;
var StyledTextField2 = (0, import_styled_components6.default)(import_TextField.default)`
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
var ErrorMessageWrapper2 = import_styled_components6.default.div`
  margin: 5px 0 8px 0;
  height: 10px;
`;
var ErrorMessage2 = import_styled_components6.default.span`
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
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(StyledTextField2, {
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
          placeholder && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_MenuItem.default, {
            value: "",
            disabled: true,
            children: placeholder
          }),
          options4 == null ? void 0 : options4.map((option) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_MenuItem.default, {
            value: option.value,
            children: option.label
          }, option.value))
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ErrorMessage_default2, {
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
var import_FormGroup = __toESM(require("@mui/material/FormGroup"));
var import_FormControlLabel = __toESM(require("@mui/material/FormControlLabel"));
var import_Checkbox = __toESM(require("@mui/material/Checkbox"));

// src/fields/CheckboxGroup/styles.ts
var import_styled_components7 = __toESM(require("styled-components"));
var GroupWrapper = import_styled_components7.default.div`
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
var import_react3 = require("react");
var useLogic3 = (options4, onValueChange) => {
  const [value, setValue] = (0, import_react3.useState)([]);
  const [checkboxGroup, setCheckboxGroup] = (0, import_react3.useState)({});
  const handleChange = (event) => {
    setCheckboxGroup(__spreadProps(__spreadValues({}, checkboxGroup), {
      [event.target.name]: {
        isChecked: event.target.checked,
        value: event.target.value,
        label: event.target.name
      }
    }));
  };
  (0, import_react3.useEffect)(() => {
    const group = {
      isChecked: false,
      value: "",
      label: ""
    };
    options4 == null ? void 0 : options4.forEach((element) => {
      group[element.label] = {
        isChecked: false,
        value: element.value,
        label: element.label
      };
    });
    setCheckboxGroup(group);
  }, [options4]);
  (0, import_react3.useEffect)(() => {
    const checkedValues = [];
    const asArray = Object.entries(checkboxGroup);
    asArray.forEach((e) => {
      if (e[1].isChecked === true) {
        checkedValues.push(e[1].value);
      }
    });
    setValue(checkedValues);
  }, [checkboxGroup]);
  (0, import_react3.useEffect)(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value, onValueChange]);
  return { handleChange };
};

// src/fields/CheckboxGroup/CheckboxGroup.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_FormGroup.default, {
        onChange: handleChange,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(GroupWrapper, {
          direction,
          children: options4 == null ? void 0 : options4.map((option) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_FormControlLabel.default, {
            name,
            value: option.value,
            control: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_Checkbox.default, {
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ErrorMessage_default2, {
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
var import_Radio = __toESM(require("@mui/material/Radio"));
var import_RadioGroup = __toESM(require("@mui/material/RadioGroup"));
var import_FormControlLabel2 = __toESM(require("@mui/material/FormControlLabel"));

// src/fields/RadioGroup/useLogic.ts
var import_react4 = require("react");
var useLogic4 = ({ options: options4, defaultValue, onValueChange }) => {
  const [value, setValue] = (0, import_react4.useState)(
    defaultValue || { value: "", label: "" }
  );
  const handleChange = (event) => {
    const selectedOption = options4 == null ? void 0 : options4.filter(
      (option) => option.value === event.target.value
    )[0];
    setValue(selectedOption || { value: "option1", label: "option1" });
  };
  (0, import_react4.useEffect)(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value == null ? void 0 : value.value);
    }
  }, [value, onValueChange]);
  return { handleChange };
};

// src/fields/RadioGroup/styles.ts
var import_styled_components8 = __toESM(require("styled-components"));
var RadioWrapper = import_styled_components8.default.div`
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
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_RadioGroup.default, {
        "aria-labelledby": "demo-radio-buttons-group-label",
        defaultValue: "female",
        name,
        onChange: handleChange,
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(RadioWrapper, {
          direction,
          children: options4 == null ? void 0 : options4.map((option) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_FormControlLabel2.default, {
            value: option.value,
            control: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_Radio.default, {
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
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ErrorMessage_default2, {
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
var import_styled_components9 = __toESM(require("styled-components"));
var import_RemoveCircleOutline = require("@styled-icons/material/RemoveCircleOutline");
var import_Upload = require("@styled-icons/boxicons-regular/Upload");
var import_EyeOutline = require("@styled-icons/evaicons-outline/EyeOutline");
var Container3 = import_styled_components9.default.div`
  margin-bottom: 20px;
`;
var DropArea = import_styled_components9.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
  padding: 0 20px;
`;
var Wrapper = import_styled_components9.default.div`
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
var Info = import_styled_components9.default.div`
  align-items: center;
  overflow: hidden;

  flex-grow: 1;
  padding: 0 20px;
  display: flex;

  text-align: center;
`;
var Text = import_styled_components9.default.span`
  width: 100%;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var UploadButton = import_styled_components9.default.button`
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
var RemoveIcon = (0, import_styled_components9.default)(import_RemoveCircleOutline.RemoveCircleOutline)`
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
var UploadIcon = (0, import_styled_components9.default)(import_Upload.Upload)`
  &&& {
    color: white;
    height: 25px;
    width: 25px;
  }
`;
var EyeIcon = (0, import_styled_components9.default)(import_EyeOutline.EyeOutline)`
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
var LabelWrapper3 = import_styled_components9.default.div`
  display: flex;
`;
var StyledLabel3 = import_styled_components9.default.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;
var LoaderWrapper = import_styled_components9.default.div`
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
var import_jsx_runtime10 = require("react/jsx-runtime");
var Index8 = ({
  label,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(FieldContainer_default2, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Wrapper, {
        error: isTouched && !!error || false
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ErrorMessage_default2, {
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
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var import_AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var import_ru = require("dayjs/locale/ru");
var import_ar_sa = require("dayjs/locale/ar-sa");
var import_ar_tn = require("dayjs/locale/ar-tn");
var import_ar_ma = require("dayjs/locale/ar-ma");
var import_fr = require("dayjs/locale/fr");

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
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_LocalizationProvider.LocalizationProvider, {
          dateAdapter: import_AdapterDayjs.AdapterDayjs,
          adapterLocale: locale,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_Stack.default, {
            spacing: 3
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ErrorMessage_default2, {
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
var import_Stack2 = __toESM(require("@mui/material/Stack"));
var import_LocalizationProvider2 = require("@mui/x-date-pickers/LocalizationProvider");
var import_AdapterDayjs2 = require("@mui/x-date-pickers/AdapterDayjs");
var import_ru2 = require("dayjs/locale/ru");
var import_ar_sa2 = require("dayjs/locale/ar-sa");
var import_ar_tn2 = require("dayjs/locale/ar-tn");
var import_ar_ma2 = require("dayjs/locale/ar-ma");
var import_fr2 = require("dayjs/locale/fr");

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
var import_jsx_runtime12 = require("react/jsx-runtime");
var Index10 = ({
  label,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar,
  locale
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_LocalizationProvider2.LocalizationProvider, {
        dateAdapter: import_AdapterDayjs2.AdapterDayjs,
        adapterLocale: locale,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_Stack2.default, {
          spacing: 3
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ErrorMessage_default2, {
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
var import_jsx_runtime13 = require("react/jsx-runtime");
var Index11 = ({
  label,
  isHidden,
  isRequired,
  isTouched,
  error,
  isWithRequiredStar
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(FieldContainer_default2, {
    isHidden,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FieldLabel_default2, {
        label,
        isRequired,
        isWithRequiredStar
      }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ErrorMessage_default2, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckboxGroup,
  DatePicker,
  FileSelector,
  Input,
  Number,
  RadioGroup,
  Select,
  TimePicker
});
