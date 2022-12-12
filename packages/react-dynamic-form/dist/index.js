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
var react_dynamic_form_exports = {};
__export(react_dynamic_form_exports, {
  default: () => react_dynamic_form_default
});
module.exports = __toCommonJS(react_dynamic_form_exports);

// src/helpers/adjustFields/index.js
var inRange = (x, min, max) => (x - min) * (x - max) <= 0;
var adjustFields = (fields, placement) => {
  const isArray = (e) => Array.isArray(e);
  const isIndex = (number) => inRange(number, 0, fields.length - 1);
  const newFields = [];
  if (placement && placement.length > 0) {
    placement.forEach((element) => {
      let list = [];
      if (isArray(element)) {
        if ((element == null ? void 0 : element.length) > 0) {
          list = adjustFields(fields, element);
          newFields.push(list);
        }
      } else if (isIndex(element)) {
        newFields.push(fields[element]);
      } else if (element === -1) {
        newFields.push({ type: "none", name: "none" });
      }
    });
    return newFields;
  }
  return fields;
};

// src/DynamicForm/defaultProps.ts
var defaultProps = {
  submitButtonLabel: "Submit",
  resetButtonLabel: "\u0625\u0644\u063A\u0627\u0621",
  fieldMinWidth: 300,
  fieldRightMargin: 10,
  placement: [],
  theme: {},
  fields: [
    {
      type: "text",
      name: "text",
      label: "Text Input",
      placeholder: "put some text here ..."
    },
    {
      type: "textarea",
      name: "textarea",
      label: "Text Area",
      placeholder: "put some text here ..."
    },
    {
      type: "email",
      name: "email",
      label: "Email ",
      placeholder: "ex:helloworld@gmail.com"
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "password"
    },
    {
      type: "file",
      name: "file",
      label: "File Selector",
      placeholder: "drag and drop file here ..."
    },
    {
      type: "select",
      name: "select",
      label: "Select",
      options: [
        { value: "op1", label: "Option 1" },
        { value: "op2", label: "Option 2" },
        { value: "op3", label: "Option 3" }
      ]
    },
    {
      type: "radioGroup",
      name: "radioGroup",
      label: "Radio Group",
      options: [
        { value: "op1", label: "Option 1" },
        { value: "op2", label: "Option 2" },
        { value: "op3", label: "Option 3" }
      ]
    },
    {
      type: "checkboxGroup",
      name: "checkboxGroup",
      label: "Checkbox Group",
      options: [
        { value: "op1", label: "Option 1" },
        { value: "op2", label: "Option 2" },
        { value: "op3", label: "Option 3" }
      ]
    }
  ]
};

// src/formik/FormikContext/index.jsx
var import_formik = require("formik");

// src/helpers/useInitialValues.js
var useInitialValues = (fields) => {
  if (fields.length > 0) {
    const initialValues = {};
    fields.forEach((e) => {
      initialValues[e.name] = e.defaultValue || "";
    });
    return initialValues;
  }
  return {};
};

// src/helpers/useValidationSchema.js
var Yup4 = __toESM(require("yup"));

// src/helpers/yups/fileYup.js
var Yup = __toESM(require("yup"));
var fileYup = ({
  isRequired,
  supportedFormats,
  maxFileSizeMB,
  fieldIsRequiredMessage,
  unsupportedFileFormatMessage,
  FileSizeIsLargeMessage,
  validations
}) => {
  let schema = Yup.mixed()[isRequired ? "required" : "optional"](fieldIsRequiredMessage).test("fileType", unsupportedFileFormatMessage, (file) => {
    if (file) {
      return supportedFormats == null ? void 0 : supportedFormats.includes(file.type);
    }
    return true;
  }).test("fileSize", FileSizeIsLargeMessage, (file) => {
    const sizeInBytes = maxFileSizeMB * 1024 * 1024;
    if (file) {
      return file.size <= sizeInBytes;
    }
    return true;
  });
  if (validations && validations.length > 0) {
    validations.forEach((e) => {
      const { name, message, validation } = e;
      schema = schema.test(name, message, validation);
    });
  }
  return schema;
};

// src/helpers/yups/stringYup.js
var Yup2 = __toESM(require("yup"));
var stringYup = ({
  isRequired,
  fieldIsRequiredMessage,
  validations
}) => {
  let schema = Yup2.string()[isRequired ? "required" : "optional"](
    fieldIsRequiredMessage
  );
  if (validations && validations.length > 0) {
    validations.forEach((e) => {
      const { name, message, validation } = e;
      schema = schema.test(name, message, validation);
    });
  }
  return schema;
};

// src/helpers/yups/arrayOfStringsYup.js
var Yup3 = __toESM(require("yup"));
var arrayOfStringsYup = ({
  required,
  fieldIsRequiredMessage,
  validations
}) => {
  let schema = Yup3.array().of(Yup3.string())[required ? "required" : "optional"](fieldIsRequiredMessage).min(required ? 1 : 0, fieldIsRequiredMessage);
  if (validations && validations.length > 0) {
    validations.forEach((e) => {
      const { name, message, validation } = e;
      schema = schema.test(name, message, validation);
    });
  }
  return schema;
};

// src/helpers/useValidationSchema.js
var useValidationSchema = (fields) => {
  const validationObject = {};
  if (fields.length > 0) {
    fields.forEach((field) => {
      const {
        type,
        name,
        isRequired,
        fieldIsRequiredMessage,
        supportedFormats,
        maxFileSizeMB,
        unsupportedFileFormatMessage,
        FileSizeIsLargeMessage,
        validations
      } = field;
      switch (type) {
        case "text":
        case "textarea":
        case "email":
        case "password":
        case "number":
        case "date":
        case "time":
        case "phone":
        case "select":
        case "radioGroup":
          validationObject[name] = stringYup({
            isRequired,
            fieldIsRequiredMessage,
            validations
          });
          break;
        case "checkboxGroup":
          validationObject[name] = arrayOfStringsYup({
            isRequired,
            fieldIsRequiredMessage
          });
          break;
        case "file":
          validationObject[name] = fileYup({
            isRequired,
            fieldIsRequiredMessage,
            supportedFormats,
            maxFileSizeMB,
            unsupportedFileFormatMessage,
            FileSizeIsLargeMessage,
            validations
          });
          break;
        default:
          validationObject[name] = {};
          break;
      }
    });
    return Yup4.object(validationObject);
  }
  return Yup4.object();
};

// src/formik/FormikContext/index.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var Index = ({ fields, onSubmit, children, dir }) => {
  const initialValues = useInitialValues(fields);
  const validationSchema = useValidationSchema(fields);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_formik.Formik, {
    dir,
    initialValues,
    validationSchema,
    onSubmit,
    children
  });
};
var FormikContext_default = Index;

// src/formik/FormikForm/index.jsx
var import_formik4 = require("formik");

// src/atoms/SubmitButton/styles.ts
var import_styled_components = __toESM(require("styled-components"));
var StyledButton = import_styled_components.default.button`
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var Index2 = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StyledButton, {
    type: "submit",
    children
  });
};
var SubmitButton_default = Index2;

// src/formik/FormikField/index.tsx
var import_react = require("react");
var import_formik2 = require("formik");

// src/FieldSwitcher/index.tsx
var import_react_form_fields = require("@med-jrad/react-form-fields");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Index3 = ({ field, meta }) => {
  const {
    type,
    name,
    label,
    isRequired,
    isHidden,
    isDisabled,
    onValueChange,
    options,
    defaultValue,
    placeholder,
    locale,
    dateFormat,
    onEyeIconClicked,
    isLoading,
    maxLength,
    isWithRequiredStar
  } = field;
  const { error, touched } = meta;
  switch (type) {
    case "text":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
        type: "text",
        name,
        label,
        placeholder,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        maxLength,
        isWithRequiredStar
      });
    case "phone":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {});
    case "textarea":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
        type: "text",
        name,
        label,
        placeholder,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        isMultiline: true,
        minRows: 3,
        isWithRequiredStar
      });
    case "email":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
        type: "email",
        name,
        label,
        placeholder,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        maxLength,
        isWithRequiredStar
      });
    case "password":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
        type: "password",
        name,
        label,
        placeholder,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        maxLength,
        isWithRequiredStar
      });
    case "number":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Number, {
        name,
        label,
        placeholder,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        maxLength
      });
    case "date":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.DatePicker, {
        label,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        locale,
        dateFormat
      });
    case "time":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.TimePicker, {
        label,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange
      });
    case "select":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Select, {
        name,
        label,
        placeholder,
        options,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        isWithRequiredStar
      });
    case "radioGroup":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.RadioGroup, {
        name,
        label,
        options,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        isWithRequiredStar
      });
    case "checkboxGroup":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.CheckboxGroup, {
        name,
        label,
        options,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        isWithRequiredStar
      });
    case "file":
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.FileSelector, {
        label,
        placeholder,
        isRequired,
        isHidden,
        isDisabled,
        defaultValue,
        isTouched: touched,
        error: error || "",
        onValueChange,
        onEyeIconClicked,
        isLoading,
        isWithRequiredStar
      });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {});
  }
};
var FieldSwitcher_default = Index3;

// src/formik/FormikField/styles.ts
var import_styled_components2 = __toESM(require("styled-components"));
var Wrapper = import_styled_components2.default.div`
  min-width: ${({ fieldMinWidth }) => `${fieldMinWidth}px`};

  ${({ dir, fieldRightMargin }) => dir === "rtl" ? import_styled_components2.css`
          margin-left: ${fieldRightMargin}px;
        ` : import_styled_components2.css`
          margin-right: ${fieldRightMargin}px;
        `}
`;

// src/formik/FormikField/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Index4 = ({
  field,
  onValueChange,
  fieldRightMargin,
  fieldMinWidth
}) => {
  const [dir, setDir] = (0, import_react.useState)("ltr");
  (0, import_react.useEffect)(() => {
    setDir(document.dir || "ltr");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_formik2.Field, {
    name: field.name,
    children: ({ meta }) => {
      const modifiedField = __spreadProps(__spreadValues({}, field), {
        onValueChange: onValueChange(field)
      });
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Wrapper, {
        fieldMinWidth,
        fieldRightMargin,
        dir,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FieldSwitcher_default, {
          field: modifiedField,
          meta
        })
      });
    }
  });
};
var FormikField_default = Index4;

// src/formik/FormikForm/styles.ts
var import_styled_components3 = __toESM(require("styled-components"));
var Container = import_styled_components3.default.div``;
var InlineFieldContainer = import_styled_components3.default.div`
  width: ${({ width }) => width};
`;
var Wrapper2 = import_styled_components3.default.div`
  border-radius: 5px;
  position: relative;
  background-color: #f8f8f8;

  border: 1px solid ${({ error }) => error ? "red" : "#1d292e"};
  height: 60px;
  width: 100%;
  &:hover {
    border: 1px dashed #1d292e;
  }
`;
var InlineFieldsContainer = import_styled_components3.default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// src/formik/FormikForm/useLogic.js
var import_react2 = require("react");
var import_formik3 = require("formik");
var useLogic = () => {
  const [currentField, setCurrentField] = (0, import_react2.useState)();
  const [currentValue, setCurrentValue] = (0, import_react2.useState)();
  const { values, setFieldValue, setFieldTouched, submitCount } = (0, import_formik3.useFormikContext)();
  const onValueChange = (field) => (value) => {
    setCurrentField(field);
    setCurrentValue(value);
  };
  (0, import_react2.useEffect)(() => {
    if (currentField && currentValue) {
      setFieldValue(currentField.name, currentValue);
    }
  }, [currentField, currentValue, setFieldValue]);
  (0, import_react2.useEffect)(() => {
    if (currentField && typeof currentField.validateOnValueChange === "function") {
      if (values[currentField.name]) {
        setFieldTouched(currentField.name, true);
      } else if (!submitCount) {
        setFieldTouched(currentField.name, false);
      }
    }
  }, [values, currentField, setFieldTouched, submitCount]);
  return { onValueChange };
};

// src/formik/FormikForm/index.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Index5 = ({
  fields,
  submitButtonLabel,
  fieldMinWidth,
  fieldRightMargin,
  children
}) => {
  const { onValueChange } = useLogic();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_formik4.Form, {
    children: [
      fields.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, {
        children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
          children: [
            Array.isArray(field) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InlineFieldsContainer, {
              children: field.map((f) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                style: { flexGrow: 1, fieldMinWidth: `${fieldMinWidth}` },
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormikField_default, {
                  field: f,
                  onValueChange,
                  fieldRightMargin,
                  fieldMinWidth
                })
              }, f.name))
            }),
            !Array.isArray(field) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormikField_default, {
              field,
              onValueChange,
              fieldRightMargin,
              fieldMinWidth
            }, field.name)
          ]
        }, field.toString()))
      }),
      children,
      !children && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SubmitButton_default, {
        children: submitButtonLabel
      })
    ]
  });
};
var FormikForm_default = Index5;

// src/DynamicForm/DynamicForm.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Index6 = ({
  fields,
  onSubmit,
  submitButtonLabel,
  placement,
  fieldMinWidth,
  fieldRightMargin,
  children
}) => {
  if ((fields == null ? void 0 : fields.length) === 0)
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {});
  let adjustedFields = fields;
  if (placement && placement.length > 0) {
    adjustedFields = adjustFields(fields, placement);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormikContext_default, {
    fields,
    onSubmit,
    dir: "rtl",
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormikForm_default, {
      fields: adjustedFields,
      submitButtonLabel,
      fieldMinWidth,
      fieldRightMargin,
      children
    }, "form")
  });
};
Index6.defaultProps = defaultProps;
var DynamicForm_default = Index6;

// src/DynamicForm/index.tsx
var DynamicForm_default2 = DynamicForm_default;

// index.tsx
var react_dynamic_form_default = DynamicForm_default2;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
