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
        if (element?.length > 0) {
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
import { Formik } from "formik";

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
import * as Yup4 from "yup";

// src/helpers/yups/fileYup.js
import * as Yup from "yup";
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
      return supportedFormats?.includes(file.type);
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
import * as Yup2 from "yup";
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
import * as Yup3 from "yup";
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
import { jsx } from "react/jsx-runtime";
var Index = ({ fields, onSubmit, children, dir }) => {
  const initialValues = useInitialValues(fields);
  const validationSchema = useValidationSchema(fields);
  return /* @__PURE__ */ jsx(Formik, {
    dir,
    initialValues,
    validationSchema,
    onSubmit,
    children
  });
};
var FormikContext_default = Index;

// src/formik/FormikForm/index.jsx
import { Form } from "formik";

// src/atoms/SubmitButton/styles.ts
import styled from "styled-components";
var StyledButton = styled.button`
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
import { jsx as jsx2 } from "react/jsx-runtime";
var Index2 = ({ children }) => {
  return /* @__PURE__ */ jsx2(StyledButton, {
    type: "submit",
    children
  });
};
var SubmitButton_default = Index2;

// src/formik/FormikField/index.jsx
import { useState, useEffect } from "react";
import { Field } from "formik";

// src/FieldSwitcher/index.tsx
import {
  Input,
  Select,
  CheckboxGroup,
  RadioGroup,
  FileSelector,
  DatePicker,
  TimePicker,
  Number
} from "@med-jrad/react-form-fields";
import { jsx as jsx3 } from "react/jsx-runtime";
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
      return /* @__PURE__ */ jsx3(Input, {
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
      return /* @__PURE__ */ jsx3("div", {});
    case "textarea":
      return /* @__PURE__ */ jsx3(Input, {
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
      return /* @__PURE__ */ jsx3(Input, {
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
      return /* @__PURE__ */ jsx3(Input, {
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
      return /* @__PURE__ */ jsx3(Number, {
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
      return /* @__PURE__ */ jsx3(DatePicker, {
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
      return /* @__PURE__ */ jsx3(TimePicker, {
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
      return /* @__PURE__ */ jsx3(Select, {
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
      return /* @__PURE__ */ jsx3(RadioGroup, {
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
      return /* @__PURE__ */ jsx3(CheckboxGroup, {
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
      return /* @__PURE__ */ jsx3(FileSelector, {
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
      return /* @__PURE__ */ jsx3("div", {});
  }
};
var FieldSwitcher_default = Index3;

// src/formik/FormikField/styles.ts
import styled2, { css } from "styled-components";
var Wrapper = styled2.div`
  min-width: ${({ fieldMinWidth }) => `${fieldMinWidth}px`};

  ${({ dir, fieldRightMargin }) => dir === "rtl" ? css`
          margin-left: ${fieldRightMargin}px;
        ` : css`
          margin-right: ${fieldRightMargin}px;
        `}
`;

// src/formik/FormikField/index.jsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Index4 = ({
  field,
  onValueChange,
  fieldRightMargin,
  fieldMinWidth
}) => {
  const [dir, setDir] = useState < Dir > "ltr";
  useEffect(() => {
    setDir(document.dir || "ltr");
  }, []);
  return /* @__PURE__ */ jsx4(Field, {
    name: field.name,
    children: ({ meta }) => {
      const modifiedField = {
        ...field,
        onValueChange: onValueChange(field)
      };
      return /* @__PURE__ */ jsx4(Wrapper, {
        fieldMinWidth,
        fieldRightMargin,
        dir,
        children: /* @__PURE__ */ jsx4(FieldSwitcher_default, {
          field: modifiedField,
          meta
        })
      });
    }
  });
};
var FormikField_default = Index4;

// src/formik/FormikForm/styles.ts
import styled3 from "styled-components";
var Container = styled3.div``;
var InlineFieldContainer = styled3.div`
  width: ${({ width }) => width};
`;
var Wrapper2 = styled3.div`
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
var InlineFieldsContainer = styled3.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// src/formik/FormikForm/useLogic.js
import { useEffect as useEffect2, useState as useState2 } from "react";
import { useFormikContext } from "formik";
var useLogic = () => {
  const [currentField, setCurrentField] = useState2();
  const [currentValue, setCurrentValue] = useState2();
  const { values, setFieldValue, setFieldTouched, submitCount } = useFormikContext();
  const onValueChange = (field) => (value) => {
    setCurrentField(field);
    setCurrentValue(value);
  };
  useEffect2(() => {
    if (currentField && currentValue) {
      setFieldValue(currentField.name, currentValue);
    }
  }, [currentField, currentValue, setFieldValue]);
  useEffect2(() => {
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
import { Fragment, jsx as jsx5, jsxs } from "react/jsx-runtime";
var Index5 = ({
  fields,
  submitButtonLabel,
  fieldMinWidth,
  fieldRightMargin,
  children
}) => {
  const { onValueChange } = useLogic();
  return /* @__PURE__ */ jsxs(Form, {
    children: [
      fields.length > 0 && /* @__PURE__ */ jsx5(Fragment, {
        children: fields.map((field) => /* @__PURE__ */ jsxs("div", {
          children: [
            Array.isArray(field) && /* @__PURE__ */ jsx5(InlineFieldsContainer, {
              children: field.map((f) => /* @__PURE__ */ jsx5("div", {
                style: { flexGrow: 1, fieldMinWidth: `${fieldMinWidth}` },
                children: /* @__PURE__ */ jsx5(FormikField_default, {
                  field: f,
                  onValueChange,
                  fieldRightMargin,
                  fieldMinWidth
                })
              }, f.name))
            }),
            !Array.isArray(field) && /* @__PURE__ */ jsx5(FormikField_default, {
              field,
              onValueChange,
              fieldRightMargin,
              fieldMinWidth
            }, field.name)
          ]
        }, field.toString()))
      }),
      children,
      !children && /* @__PURE__ */ jsx5(SubmitButton_default, {
        children: submitButtonLabel
      })
    ]
  });
};
var FormikForm_default = Index5;

// src/DynamicForm/DynamicForm.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Index6 = ({
  fields,
  onSubmit,
  submitButtonLabel,
  placement,
  fieldMinWidth,
  fieldRightMargin,
  children
}) => {
  if (fields?.length === 0)
    return /* @__PURE__ */ jsx6("div", {});
  let adjustedFields = fields;
  if (placement && placement.length > 0) {
    adjustedFields = adjustFields(fields, placement);
  }
  return /* @__PURE__ */ jsx6(FormikContext_default, {
    fields,
    onSubmit,
    dir: "rtl",
    children: /* @__PURE__ */ jsx6(FormikForm_default, {
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
export {
  react_dynamic_form_default as default
};
