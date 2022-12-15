"use strict";
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  border-radius: 3px;\n  font-size: 13px;\n  font-weight: 700;\n  height: 40px;\n  min-width: 130px;\n  line-height: 28px;\n  padding: 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ea0000;\n  color: white;\n  border-color: transparent;\n  &:hover {\n    /* border-width: 5px; */\n    border-color: #c40000;\n    background-color: #c40000;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _taggedTemplateLiteral([
        "\n          margin-left: ",
        "px;\n        "
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _taggedTemplateLiteral([
        "\n          margin-right: ",
        "px;\n        "
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _taggedTemplateLiteral([
        "\n  min-width: ",
        ";\n\n  ",
        "\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _taggedTemplateLiteral([
        ""
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _taggedTemplateLiteral([
        "\n  width: ",
        ";\n"
    ]);
    _templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _taggedTemplateLiteral([
        "\n  border-radius: 5px;\n  position: relative;\n  background-color: #f8f8f8;\n\n  border: 1px solid ",
        ";\n  height: 60px;\n  width: 100%;\n  &:hover {\n    border: 1px dashed #1d292e;\n  }\n"
    ]);
    _templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _taggedTemplateLiteral([
        "\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"
    ]);
    _templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// index.tsx
var react_dynamic_form_exports = {};
__export(react_dynamic_form_exports, {
    default: function() {
        return react_dynamic_form_default;
    }
});
module.exports = __toCommonJS(react_dynamic_form_exports);
// src/helpers/adjustFields/index.ts
var inRange = function(x, min, max) {
    return (x - min) * (x - max) <= 0;
};
var adjustFields = function(fields, placement) {
    var isArray = function(e) {
        return Array.isArray(e);
    };
    var isIndex = function(number) {
        return inRange(number, 0, fields.length - 1);
    };
    var newFields = [];
    if (placement && placement.length > 0) {
        placement.forEach(function(element) {
            var list = [];
            if (isArray(element)) {
                if ((element === null || element === void 0 ? void 0 : element.length) > 0) {
                    list = adjustFields(fields, element);
                    newFields.push(list);
                }
            } else if (isIndex(element)) {
                newFields.push(fields[element]);
            } else if (element === -1) {
                newFields.push({
                    type: "none",
                    name: "none"
                });
            }
        });
        return newFields;
    }
    return fields;
};
// src/DynamicForm/defaultProps.ts
var defaultProps = {
    schema: {
        submitButtonLabel: "Submit",
        resetButtonLabel: "Reset",
        fieldMinWidth: 300,
        fieldRightMargin: 10,
        placement: [],
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
                    {
                        value: "op1",
                        label: "Option 1"
                    },
                    {
                        value: "op2",
                        label: "Option 2"
                    },
                    {
                        value: "op3",
                        label: "Option 3"
                    }
                ]
            },
            {
                type: "radioGroup",
                name: "radioGroup",
                label: "Radio Group",
                options: [
                    {
                        value: "op1",
                        label: "Option 1"
                    },
                    {
                        value: "op2",
                        label: "Option 2"
                    },
                    {
                        value: "op3",
                        label: "Option 3"
                    }
                ]
            },
            {
                type: "checkboxGroup",
                name: "checkboxGroup",
                label: "Checkbox Group",
                options: [
                    {
                        value: "op1",
                        label: "Option 1"
                    },
                    {
                        value: "op2",
                        label: "Option 2"
                    },
                    {
                        value: "op3",
                        label: "Option 3"
                    }
                ]
            }
        ]
    }
};
// src/formik/FormikContext/index.tsx
var import_formik = require("formik");
// src/helpers/useInitialValues.ts
var useInitialValues = function(fields) {
    if (fields.length > 0) {
        var initialValues = {};
        fields.forEach(function(e) {
            initialValues[e.name] = e.defaultValue || "";
        });
        return initialValues;
    }
    return {};
};
// src/helpers/useValidationSchema.ts
var Yup4 = __toESM(require("yup"));
// src/helpers/yups/fileYup.ts
var Yup = __toESM(require("yup"));
var fileYup = function(param) {
    var isRequired = param.isRequired, supportedFormats = param.supportedFormats, maxFileSizeMB = param.maxFileSizeMB, fieldIsRequiredMessage = param.fieldIsRequiredMessage, unsupportedFileFormatMessage = param.unsupportedFileFormatMessage, FileSizeIsLargeMessage = param.FileSizeIsLargeMessage, validations = param.validations;
    var schema = Yup.mixed()[isRequired ? "required" : "optional"](fieldIsRequiredMessage).test("fileType", unsupportedFileFormatMessage, function(file) {
        if (file) {
            return supportedFormats === null || supportedFormats === void 0 ? void 0 : supportedFormats.includes(file.type);
        }
        return true;
    }).test("fileSize", FileSizeIsLargeMessage, function(file) {
        var sizeInBytes = maxFileSizeMB * 1024 * 1024;
        if (file) {
            return file.size <= sizeInBytes;
        }
        return true;
    });
    if (validations && validations.length > 0) {
        validations.forEach(function(e) {
            var name = e.name, message = e.message, validation = e.validation;
            schema = schema.test(name, message, validation);
        });
    }
    return schema;
};
// src/helpers/yups/stringYup.ts
var Yup2 = __toESM(require("yup"));
var stringYup = function(param) {
    var isRequired = param.isRequired, fieldIsRequiredMessage = param.fieldIsRequiredMessage, validations = param.validations;
    var schema = Yup2.string()[isRequired ? "required" : "optional"](fieldIsRequiredMessage);
    if (validations && validations.length > 0) {
        validations.forEach(function(e) {
            var name = e.name, message = e.message, validation = e.validation;
            schema = schema.test(name, message, validation);
        });
    }
    return schema;
};
// src/helpers/yups/arrayOfStringsYup.ts
var Yup3 = __toESM(require("yup"));
var arrayOfStringsYup = function(param) {
    var required = param.required, fieldIsRequiredMessage = param.fieldIsRequiredMessage, validations = param.validations;
    var schema = Yup3.array().of(Yup3.string())[required ? "required" : "optional"](fieldIsRequiredMessage).min(required ? 1 : 0, fieldIsRequiredMessage);
    if (validations && validations.length > 0) {
        validations.forEach(function(e) {
            var name = e.name, message = e.message, validation = e.validation;
            schema = schema.test(name, message, validation);
        });
    }
    return schema;
};
// src/helpers/useValidationSchema.ts
var useValidationSchema = function(fields) {
    var validationObject = {};
    if (fields.length > 0) {
        fields.forEach(function(field) {
            var type = field.type, name = field.name, isRequired = field.isRequired, fieldIsRequiredMessage = field.fieldIsRequiredMessage, supportedFormats = field.supportedFormats, maxFileSizeMB = field.maxFileSizeMB, unsupportedFileFormatMessage = field.unsupportedFileFormatMessage, FileSizeIsLargeMessage = field.FileSizeIsLargeMessage, validations = field.validations;
            switch(type){
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
                        isRequired: isRequired,
                        fieldIsRequiredMessage: fieldIsRequiredMessage,
                        validations: validations
                    });
                    break;
                case "checkboxGroup":
                    validationObject[name] = arrayOfStringsYup({
                        isRequired: isRequired,
                        fieldIsRequiredMessage: fieldIsRequiredMessage
                    });
                    break;
                case "file":
                    validationObject[name] = fileYup({
                        isRequired: isRequired,
                        fieldIsRequiredMessage: fieldIsRequiredMessage,
                        supportedFormats: supportedFormats,
                        maxFileSizeMB: maxFileSizeMB,
                        unsupportedFileFormatMessage: unsupportedFileFormatMessage,
                        FileSizeIsLargeMessage: FileSizeIsLargeMessage,
                        validations: validations
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
// src/formik/FormikContext/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Index = function(param) {
    var fields = param.fields, onSubmit = param.onSubmit, children = param.children, dir = param.dir;
    var initialValues = useInitialValues(fields);
    var validationSchema = useValidationSchema(fields);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_formik.Formik, {
        dir: dir,
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
        children: children
    });
};
var FormikContext_default = Index;
// src/formik/FormikForm/index.tsx
var import_formik5 = require("formik");
// src/atoms/SubmitButton/styles.ts
var import_styled_components = __toESM(require("styled-components"));
var StyledButton = import_styled_components.default.button(_templateObject());
// src/atoms/SubmitButton/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Index2 = function(param) {
    var children = param.children;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StyledButton, {
        type: "submit",
        children: children
    });
};
var SubmitButton_default = Index2;
// src/formik/FormikField/index.tsx
var import_formik3 = require("formik");
// src/FieldSwitcher/index.tsx
var import_react_form_fields = require("@med-jrad/react-form-fields");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Index3 = function(param) {
    var field = param.field, meta = param.meta;
    var type = field.type, name = field.name, label = field.label, isRequired = field.isRequired, isHidden = field.isHidden, isDisabled = field.isDisabled, onValueChange = field.onValueChange, options = field.options, defaultValue = field.defaultValue, placeholder = field.placeholder, locale = field.locale, dateFormat = field.dateFormat, onEyeIconClicked = field.onEyeIconClicked, isLoading = field.isLoading, maxLength = field.maxLength, isWithRequiredStar = field.isWithRequiredStar;
    var error = meta.error, isTouched = meta.isTouched;
    switch(type){
        case "text":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
                type: "text",
                name: name,
                label: label,
                placeholder: placeholder,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                maxLength: maxLength,
                isWithRequiredStar: isWithRequiredStar
            });
        case "phone":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {});
        case "textarea":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
                type: "text",
                name: name,
                label: label,
                placeholder: placeholder,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                isMultiline: true,
                minRows: 3,
                isWithRequiredStar: isWithRequiredStar
            });
        case "email":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
                type: "email",
                name: name,
                label: label,
                placeholder: placeholder,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                maxLength: maxLength,
                isWithRequiredStar: isWithRequiredStar
            });
        case "password":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Input, {
                type: "password",
                name: name,
                label: label,
                placeholder: placeholder,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                maxLength: maxLength,
                isWithRequiredStar: isWithRequiredStar
            });
        case "number":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Number, {
                name: name,
                label: label,
                placeholder: placeholder,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                maxLength: maxLength
            });
        case "date":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.DatePicker, {
                label: label,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                locale: locale,
                dateFormat: dateFormat
            });
        case "time":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.TimePicker, {
                label: label,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange
            });
        case "select":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.Select, {
                name: name,
                label: label,
                placeholder: placeholder,
                options: options,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                isWithRequiredStar: isWithRequiredStar
            });
        case "radioGroup":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.RadioGroup, {
                name: name,
                label: label,
                options: options,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                isWithRequiredStar: isWithRequiredStar
            });
        case "checkboxGroup":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.CheckboxGroup, {
                name: name,
                label: label,
                options: options,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                isWithRequiredStar: isWithRequiredStar
            });
        case "file":
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_form_fields.FileSelector, {
                label: label,
                placeholder: placeholder,
                isRequired: isRequired,
                isHidden: isHidden,
                isDisabled: isDisabled,
                defaultValue: defaultValue,
                isTouched: isTouched,
                error: error || "",
                onValueChange: onValueChange,
                onEyeIconClicked: onEyeIconClicked,
                isLoading: isLoading,
                isWithRequiredStar: isWithRequiredStar
            });
        default:
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {});
    }
};
var FieldSwitcher_default = Index3;
// src/formik/FormikField/styles.ts
var import_styled_components2 = __toESM(require("styled-components"));
var Wrapper = import_styled_components2.default.div(_templateObject3(), function(param) {
    var fieldMinWidth = param.fieldMinWidth;
    return "".concat(fieldMinWidth, "px");
}, function(param) {
    var dir = param.dir, fieldRightMargin = param.fieldRightMargin;
    return dir === "rtl" ? import_styled_components2.css(_templateObject1(), fieldRightMargin) : import_styled_components2.css(_templateObject2(), fieldRightMargin);
});
// src/formik/FormikField/useLogic.ts
var import_react = require("react");
var import_formik2 = require("formik");
var useLogic = function(field, onValueChange) {
    var _ref = _slicedToArray((0, import_react.useState)("ltr"), 2), dir = _ref[0], setDir = _ref[1];
    var _ref1 = _slicedToArray((0, import_react.useState)(false), 2), isTouched = _ref1[0], setIsTouched = _ref1[1];
    var _ref2 = _slicedToArray((0, import_react.useState)(""), 2), error = _ref2[0], setError = _ref2[1];
    var _ref3 = _slicedToArray((0, import_react.useState)({
        error: "",
        isTouched: false
    }), 2), meta = _ref3[0], setMeta = _ref3[1];
    var _ref4 = (0, import_formik2.useFormikContext)(), errors = _ref4.errors, touched = _ref4.touched;
    var modifiedField = _objectSpreadProps(_objectSpread({}, field), {
        onValueChange: onValueChange
    });
    (0, import_react.useEffect)(function() {
        setDir(document.dir || "ltr");
    }, [
        setDir
    ]);
    (0, import_react.useEffect)(function() {
        var name = field.name;
        setError(errors[name]);
    }, [
        errors,
        setError,
        field
    ]);
    (0, import_react.useEffect)(function() {
        var name = field.name;
        setIsTouched(touched[name]);
    }, [
        touched,
        setIsTouched,
        field
    ]);
    (0, import_react.useEffect)(function() {
        setMeta({
            isTouched: isTouched,
            error: error
        });
    }, [
        isTouched,
        error,
        setMeta
    ]);
    return {
        meta: meta,
        dir: dir,
        modifiedField: modifiedField
    };
};
// src/formik/FormikField/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Index4 = function(param) {
    var field = param.field, onValueChange = param.onValueChange, fieldRightMargin = param.fieldRightMargin, fieldMinWidth = param.fieldMinWidth;
    var _useLogic = useLogic(field, onValueChange), meta = _useLogic.meta, dir = _useLogic.dir, modifiedField = _useLogic.modifiedField;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_formik3.Field, {
        name: field.name,
        children: function() {
            return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Wrapper, {
                fieldMinWidth: fieldMinWidth,
                fieldRightMargin: fieldRightMargin,
                dir: dir,
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FieldSwitcher_default, {
                    field: modifiedField,
                    meta: meta
                })
            });
        }
    });
};
var FormikField_default = Index4;
// src/formik/FormikForm/styles.ts
var import_styled_components3 = __toESM(require("styled-components"));
var Container = import_styled_components3.default.div(_templateObject4());
var InlineFieldContainer = import_styled_components3.default.div(_templateObject5(), function(param) {
    var width = param.width;
    return width;
});
var Wrapper2 = import_styled_components3.default.div(_templateObject6(), function(param) {
    var error = param.error;
    return error ? "red" : "#1d292e";
});
var InlineFieldsContainer = import_styled_components3.default.div(_templateObject7());
// src/formik/FormikForm/useLogic.ts
var import_react2 = require("react");
var import_formik4 = require("formik");
var useLogic2 = function() {
    var _ref = _slicedToArray((0, import_react2.useState)(), 2), currentField = _ref[0], setCurrentField = _ref[1];
    var _ref1 = _slicedToArray((0, import_react2.useState)(), 2), currentValue = _ref1[0], setCurrentValue = _ref1[1];
    var _ref2 = (0, import_formik4.useFormikContext)(), values = _ref2.values, setFieldValue = _ref2.setFieldValue, setFieldTouched = _ref2.setFieldTouched, submitCount = _ref2.submitCount;
    var onValueChange = function(field) {
        return function(value) {
            setCurrentField(field);
            setCurrentValue(value);
        };
    };
    (0, import_react2.useEffect)(function() {
        if (currentField && currentValue) {
            setFieldValue(currentField.name, currentValue);
        }
    }, [
        currentField,
        currentValue,
        setFieldValue
    ]);
    (0, import_react2.useEffect)(function() {
        if (currentField && typeof currentField.validateOnValueChange === "function") {
            if (values[currentField.name]) {
                setFieldTouched(currentField.name, true);
            } else if (!submitCount) {
                setFieldTouched(currentField.name, false);
            }
        }
    }, [
        values,
        currentField,
        setFieldTouched,
        submitCount
    ]);
    return {
        onValueChange: onValueChange
    };
};
// src/formik/FormikForm/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Index5 = function(param) {
    var fields = param.fields, submitButtonLabel = param.submitButtonLabel, fieldMinWidth = param.fieldMinWidth, fieldRightMargin = param.fieldRightMargin, children = param.children;
    var onValueChange = useLogic2().onValueChange;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_formik5.Form, {
        children: [
            fields.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, {
                children: fields.map(function(field) {
                    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                        children: [
                            Array.isArray(field) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InlineFieldsContainer, {
                                children: field.map(function(f) {
                                    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                                        style: {
                                            flexGrow: 1,
                                            fieldMinWidth: "".concat(fieldMinWidth)
                                        },
                                        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormikField_default, {
                                            field: f,
                                            onValueChange: onValueChange,
                                            fieldRightMargin: fieldRightMargin,
                                            fieldMinWidth: fieldMinWidth
                                        })
                                    }, f.name);
                                })
                            }),
                            !Array.isArray(field) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FormikField_default, {
                                field: field,
                                onValueChange: onValueChange,
                                fieldRightMargin: fieldRightMargin,
                                fieldMinWidth: fieldMinWidth
                            }, field.name)
                        ]
                    }, field.toString());
                })
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
var Index6 = function(param) {
    var schema = param.schema, children = param.children;
    var fields = schema.fields, placement = schema.placement, onSubmit = schema.onSubmit, fieldMinWidth = schema.fieldMinWidth, fieldRightMargin = schema.fieldRightMargin, submitButtonLabel = schema.submitButtonLabel;
    if ((fields === null || fields === void 0 ? void 0 : fields.length) === 0) return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {});
    var adjustedFields = fields;
    if (placement && placement.length > 0) {
        adjustedFields = adjustFields(fields, placement);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormikContext_default, {
        fields: fields,
        onSubmit: onSubmit,
        dir: "rtl",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormikForm_default, {
            fields: adjustedFields,
            submitButtonLabel: submitButtonLabel,
            fieldMinWidth: fieldMinWidth,
            fieldRightMargin: fieldRightMargin,
            children: children
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
