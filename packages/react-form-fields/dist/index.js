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
        "\n  display: flex;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _taggedTemplateLiteral([
        "\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  margin-bottom: 5px;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _taggedTemplateLiteral([
        "\n  margin: 5px 0 8px 0;\n  height: 10px;\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _taggedTemplateLiteral([
        "\n  color: red;\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _taggedTemplateLiteral([
        '\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n\n  input[type="number"]::-webkit-inner-spin-button,\n  input[type="number"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n'
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _taggedTemplateLiteral([
        "\n  border-radius: 3px;\n  font-size: 13px;\n  font-weight: 700;\n  height: 40px;\n  min-width: 130px;\n  line-height: 28px;\n  padding: 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ea0000;\n  color: white;\n  border-color: transparent;\n  &:hover {\n    /* border-width: 5px; */\n    border-color: #c40000;\n    background-color: #c40000;\n  }\n"
    ]);
    _templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _taggedTemplateLiteral([
        "\n  background-color: white;\n  & label.Mui-focused {\n    color: white;\n  }\n  & .MuiInput-underline:after {\n    border-bottom-color: white;\n  }\n  & .MuiOutlinedInput-root {\n    // height: 55px;\n    & fieldset {\n      border-radius: 5px;\n      border-color: #38444880;\n      border-width: 1px;\n    }\n    &:hover fieldset {\n      border-color: #1d292e;\n      border-width: 2px;\n    }\n    &.Mui-focused fieldset {\n      border-color: #1d292e;\n    }\n  }\n"
    ]);
    _templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _taggedTemplateLiteral([
        '\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n\n  input[type="number"]::-webkit-inner-spin-button,\n  input[type="number"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n'
    ]);
    _templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _taggedTemplateLiteral([
        "\n  display: flex;\n"
    ]);
    _templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _taggedTemplateLiteral([
        "\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  margin-bottom: 5px;\n"
    ]);
    _templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _taggedTemplateLiteral([
        "\n  background-color: white;\n  & label.Mui-focused {\n    color: white;\n  }\n  & .MuiInput-underline:after {\n    border-bottom-color: white;\n  }\n  & .MuiOutlinedInput-root {\n    // height: 55px;\n    & fieldset {\n      border-radius: 5px;\n      border-color: #38444880;\n      border-width: 1px;\n    }\n    &:hover fieldset {\n      border-color: #1d292e;\n      border-width: 2px;\n    }\n    &.Mui-focused fieldset {\n      border-color: #1d292e;\n    }\n  }\n"
    ]);
    _templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _taggedTemplateLiteral([
        "\n  margin: 5px 0 8px 0;\n  height: 10px;\n"
    ]);
    _templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _taggedTemplateLiteral([
        "\n  color: red;\n"
    ]);
    _templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _taggedTemplateLiteral([
        "\n  display: flex;\n  flex-direction: ",
        ";\n  flex-wrap: wrap;\n  label {\n    height: fit-content;\n    margin: 0;\n  }\n"
    ]);
    _templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _taggedTemplateLiteral([
        "\n  display: flex;\n  flex-direction: ",
        ";\n\n  label {\n    height: fit-content;\n    margin: 0;\n  }\n"
    ]);
    _templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _taggedTemplateLiteral([
        "\n  margin-bottom: 20px;\n"
    ]);
    _templateObject15 = function _templateObject15() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _taggedTemplateLiteral([
        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  cursor: pointer;\n  padding: 0 20px;\n"
    ]);
    _templateObject16 = function _templateObject16() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _taggedTemplateLiteral([
        "\n  border-radius: 5px;\n  position: relative;\n  background-color: #f8f8f8;\n\n  border: 1px solid ",
        ";\n  height: 60px;\n  width: 100%;\n  &:hover {\n    border: 1px dashed ",
        ";\n  }\n"
    ]);
    _templateObject17 = function _templateObject17() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _taggedTemplateLiteral([
        "\n  align-items: center;\n  overflow: hidden;\n\n  flex-grow: 1;\n  padding: 0 20px;\n  display: flex;\n\n  text-align: center;\n"
    ]);
    _templateObject18 = function _templateObject18() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _taggedTemplateLiteral([
        "\n  width: 100%;\n  font-size: 18px;\n  overflow: hidden;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"
    ]);
    _templateObject19 = function _templateObject19() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _taggedTemplateLiteral([
        "\n  &&& {\n    height: 35px;\n    width: 35px;\n    margin-right: 20px;\n    background-color: #1d292e;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 20px;\n    border-radius: 6px;\n    cursor: pointer;\n  }\n"
    ]);
    _templateObject20 = function _templateObject20() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _taggedTemplateLiteral([
        "\n  &&& {\n    color: #8b9193;\n    height: 30px;\n    width: 30px;\n    min-width: 30px;\n    margin-right: 20px;\n    cursor: pointer;\n    &:hover {\n      color: red;\n    }\n  }\n"
    ]);
    _templateObject21 = function _templateObject21() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _taggedTemplateLiteral([
        "\n  &&& {\n    color: white;\n    height: 25px;\n    width: 25px;\n  }\n"
    ]);
    _templateObject22 = function _templateObject22() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _taggedTemplateLiteral([
        "\n  &&& {\n    color: #1d292e;\n    height: 30px;\n    width: 30px;\n    min-width: 30px;\n    margin-left: 20px;\n    cursor: pointer;\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n"
    ]);
    _templateObject23 = function _templateObject23() {
        return data;
    };
    return data;
}
function _templateObject24() {
    var data = _taggedTemplateLiteral([
        "\n  display: flex;\n"
    ]);
    _templateObject24 = function _templateObject24() {
        return data;
    };
    return data;
}
function _templateObject25() {
    var data = _taggedTemplateLiteral([
        "\n  font-weight: 600;\n  font-size: 16px;\n  color: black;\n  margin-bottom: 5px;\n"
    ]);
    _templateObject25 = function _templateObject25() {
        return data;
    };
    return data;
}
function _templateObject26() {
    var data = _taggedTemplateLiteral([
        "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"
    ]);
    _templateObject26 = function _templateObject26() {
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
var react_form_fields_exports = {};
__export(react_form_fields_exports, {
    CheckboxGroup: function() {
        return CheckboxGroup_default2;
    },
    DatePicker: function() {
        return DatePicker_default2;
    },
    FileSelector: function() {
        return FileSelector_default2;
    },
    Input: function() {
        return Input_default2;
    },
    Number: function() {
        return Number_default2;
    },
    RadioGroup: function() {
        return RadioGroup_default2;
    },
    Select: function() {
        return Select_default2;
    },
    TimePicker: function() {
        return TimePicker_default2;
    }
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
var LabelWrapper = import_styled_components.default.div(_templateObject());
var StyledLabel = import_styled_components.default.label(_templateObject1());
// src/atoms/FieldLabel/FieldLabel.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Index = function(param) {
    var label = param.label, isRequired = param.isRequired, isWithRequiredStar = param.isWithRequiredStar;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LabelWrapper, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLabel, {
                htmlFor: label,
                children: label
            }),
            isRequired && isWithRequiredStar && label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                style: {
                    color: "red"
                },
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
var ErrorMessageWrapper = import_styled_components2.default.div(_templateObject2());
var ErrorMessage = import_styled_components2.default.span(_templateObject3());
// src/atoms/ErrorMessage/ErrorMessage.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Index2 = function(param) {
    var error = param.error, isTouched = param.isTouched;
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
var Child = function() {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        style: {
            width: "100%",
            height: "90px",
            background: "red"
        }
    });
};
var defaultProps3 = {
    isHidden: false,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Child, {})
};
// src/atoms/FieldContainer/styles.ts
var import_styled_components3 = __toESM(require("styled-components"));
var Container = import_styled_components3.default.div(_templateObject4());
// src/atoms/FieldContainer/FieldContainer.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Index3 = function(param) {
    var isHidden = param.isHidden, children = param.children;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
        children: !isHidden && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Container, {
            children: children
        })
    });
};
Index3.defaultProps = defaultProps3;
var FieldContainer_default = Index3;
// src/atoms/FieldContainer/index.tsx
var FieldContainer_default2 = FieldContainer_default;
// src/atoms/SubmitButton/styles.ts
var import_styled_components4 = __toESM(require("styled-components"));
var StyledButton = import_styled_components4.default.button(_templateObject5());
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
var handleValue = function(param) {
    var value = param.value, type = param.type, maxLength = param.maxLength;
    if (type === "number") {
        var numberValue = Math.max(0, Number(value)).toString().slice(0, maxLength);
        return numberValue;
    }
    return value.toString().slice(0, maxLength) || "";
};
// src/fields/Input/helpers/useLogic/index.ts
var useLogic = function(param) {
    var type = param.type, defaultValue = param.defaultValue, maxLength = param.maxLength, onValueChange = param.onValueChange;
    var _ref = _slicedToArray((0, import_react.useState)(defaultValue || ""), 2), value = _ref[0], setValue = _ref[1];
    var handleChange = function(event) {
        setValue(handleValue({
            value: event.target.value,
            type: type,
            maxLength: maxLength
        }));
    };
    (0, import_react.useEffect)(function() {
        if (typeof onValueChange === "function") {
            onValueChange(value);
        }
    }, [
        value,
        onValueChange
    ]);
    (0, import_react.useEffect)(function() {
        setValue(defaultValue || "");
    }, [
        defaultValue
    ]);
    return {
        handleChange: handleChange,
        value: value
    };
};
// src/fields/Input/styles.ts
var import_styled_components5 = __toESM(require("styled-components"));
var import_material = require("@mui/material");
var StyledTextField = (0, import_styled_components5.default)(import_material.TextField)(_templateObject6());
// src/fields/Input/Input.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Index4 = function(param) {
    var type = param.type, name = param.name, label = param.label, placeholder = param.placeholder, defaultValue = param.defaultValue, isHidden = param.isHidden, isReadOnly = param.isReadOnly, isRequired = param.isRequired, isTouched = param.isTouched, isDisabled = param.isDisabled, error = param.error, maxLength = param.maxLength, isWithRequiredStar = param.isWithRequiredStar, onValueChange = param.onValueChange, isMultiline = param.isMultiline, minRows = param.minRows;
    var _useLogic = useLogic({
        type: type,
        defaultValue: defaultValue,
        maxLength: maxLength,
        onValueChange: onValueChange
    }), value = _useLogic.value, handleChange = _useLogic.handleChange;
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(FieldContainer_default2, {
        isHidden: isHidden,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledTextField, {
                type: type,
                name: name,
                placeholder: placeholder,
                value: value,
                error: isTouched && !!error,
                disabled: isDisabled,
                multiline: isMultiline,
                minRows: minRows,
                onChange: handleChange,
                InputProps: {
                    readOnly: isReadOnly
                },
                sx: {
                    "& legend": {
                        display: "none"
                    },
                    "& fieldset": {
                        top: 0
                    }
                }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ErrorMessage_default2, {
                error: error || "",
                isTouched: isTouched
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
var useLogic2 = function(param) {
    var defaultValue = param.defaultValue, onValueChange = param.onValueChange;
    var _ref = _slicedToArray((0, import_react2.useState)(defaultValue || ""), 2), value = _ref[0], setValue = _ref[1];
    var handleChange = function(event) {
        if (event.target.value !== "") {
            setValue(event.target.value);
        }
    };
    (0, import_react2.useEffect)(function() {
        setValue(defaultValue || "");
    }, [
        defaultValue
    ]);
    (0, import_react2.useEffect)(function() {
        if (typeof onValueChange === "function") {
            if (value !== "") {
                onValueChange(value);
            }
        }
    }, [
        value,
        onValueChange
    ]);
    return {
        value: value,
        handleChange: handleChange
    };
};
// src/fields/Select/styles.ts
var import_styled_components6 = __toESM(require("styled-components"));
var import_TextField = __toESM(require("@material-ui/core/TextField"));
var Container2 = import_styled_components6.default.div(_templateObject7());
var LabelWrapper2 = import_styled_components6.default.div(_templateObject8());
var StyledLabel2 = import_styled_components6.default.label(_templateObject9());
var StyledTextField2 = (0, import_styled_components6.default)(import_TextField.default)(_templateObject10());
var ErrorMessageWrapper2 = import_styled_components6.default.div(_templateObject11());
var ErrorMessage2 = import_styled_components6.default.span(_templateObject12());
// src/fields/Select/defaultProps.ts
var options = [
    {
        value: "1",
        label: "option1"
    },
    {
        value: "2",
        label: "option2"
    },
    {
        value: "3",
        label: "option3"
    }
];
var defaultProps5 = {
    name: "select",
    label: "Select",
    isRequired: false,
    isReadOnly: false,
    isHidden: false,
    error: "error message",
    isTouched: false,
    options: options,
    isWithRequiredStar: false
};
// src/fields/Select/Select.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var Index5 = function(param) {
    var name = param.name, label = param.label, placeholder = param.placeholder, defaultValue = param.defaultValue, isHidden = param.isHidden, isRequired = param.isRequired, isTouched = param.isTouched, isDisabled = param.isDisabled, error = param.error, isWithRequiredStar = param.isWithRequiredStar, onValueChange = param.onValueChange, options4 = param.options;
    var _useLogic2 = useLogic2({
        onValueChange: onValueChange,
        defaultValue: defaultValue
    }), handleChange = _useLogic2.handleChange, value = _useLogic2.value;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(FieldContainer_default2, {
        isHidden: isHidden,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(StyledTextField2, {
                name: name,
                disabled: isDisabled,
                value: value,
                onChange: handleChange,
                select: true,
                InputLabelProps: {
                    shrink: false
                },
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
                    options4 === null || options4 === void 0 ? void 0 : options4.map(function(option) {
                        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_MenuItem.default, {
                            value: option.value,
                            children: option.label
                        }, option.value);
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ErrorMessage_default2, {
                error: error,
                isTouched: isTouched
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
var GroupWrapper = import_styled_components7.default.div(_templateObject13(), function(param) {
    var direction = param.direction;
    return direction === "vertical" ? "column" : "row";
});
// src/fields/CheckboxGroup/defaultProps.ts
var options2 = [
    {
        value: "1",
        label: "option1"
    },
    {
        value: "2",
        label: "option2"
    },
    {
        value: "3",
        label: "option3"
    }
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
var useLogic3 = function(options4, onValueChange) {
    var _ref = _slicedToArray((0, import_react3.useState)([]), 2), value = _ref[0], setValue = _ref[1];
    var _ref1 = _slicedToArray((0, import_react3.useState)({}), 2), checkboxGroup = _ref1[0], setCheckboxGroup = _ref1[1];
    var handleChange = function(event) {
        setCheckboxGroup(_objectSpreadProps(_objectSpread({}, checkboxGroup), _defineProperty({}, event.target.name, {
            isChecked: event.target.checked,
            value: event.target.value,
            label: event.target.name
        })));
    };
    (0, import_react3.useEffect)(function() {
        var group = {
            isChecked: false,
            value: "",
            label: ""
        };
        options4 === null || options4 === void 0 ? void 0 : options4.forEach(function(element) {
            group[element.label] = {
                isChecked: false,
                value: element.value,
                label: element.label
            };
        });
        setCheckboxGroup(group);
    }, [
        options4
    ]);
    (0, import_react3.useEffect)(function() {
        var checkedValues = [];
        var asArray = Object.entries(checkboxGroup);
        asArray.forEach(function(e) {
            if (e[1].isChecked === true) {
                checkedValues.push(e[1].value);
            }
        });
        setValue(checkedValues);
    }, [
        checkboxGroup
    ]);
    (0, import_react3.useEffect)(function() {
        if (typeof onValueChange === "function") {
            onValueChange(value);
        }
    }, [
        value,
        onValueChange
    ]);
    return {
        handleChange: handleChange
    };
};
// src/fields/CheckboxGroup/CheckboxGroup.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Index6 = function(param) {
    var name = param.name, label = param.label, isHidden = param.isHidden, isRequired = param.isRequired, isTouched = param.isTouched, error = param.error, isWithRequiredStar = param.isWithRequiredStar, onValueChange = param.onValueChange, options4 = param.options, direction = param.direction;
    var handleChange = useLogic3(options4, onValueChange).handleChange;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(FieldContainer_default2, {
        isHidden: isHidden,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_FormGroup.default, {
                onChange: handleChange,
                children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(GroupWrapper, {
                    direction: direction,
                    children: options4 === null || options4 === void 0 ? void 0 : options4.map(function(option) {
                        return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_FormControlLabel.default, {
                            name: name,
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
                        }, option.label);
                    })
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ErrorMessage_default2, {
                error: error,
                isTouched: isTouched
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
var useLogic4 = function(param) {
    var options4 = param.options, defaultValue = param.defaultValue, onValueChange = param.onValueChange;
    var _ref = _slicedToArray((0, import_react4.useState)(defaultValue || {
        value: "",
        label: ""
    }), 2), value = _ref[0], setValue = _ref[1];
    var handleChange = function(event) {
        var selectedOption = options4 === null || options4 === void 0 ? void 0 : options4.filter(function(option) {
            return option.value === event.target.value;
        })[0];
        setValue(selectedOption || {
            value: "option1",
            label: "option1"
        });
    };
    (0, import_react4.useEffect)(function() {
        if (typeof onValueChange === "function") {
            onValueChange(value === null || value === void 0 ? void 0 : value.value);
        }
    }, [
        value,
        onValueChange
    ]);
    return {
        handleChange: handleChange
    };
};
// src/fields/RadioGroup/styles.ts
var import_styled_components8 = __toESM(require("styled-components"));
var RadioWrapper = import_styled_components8.default.div(_templateObject14(), function(param) {
    var direction = param.direction;
    return direction === "vertical" ? "column" : "row";
});
// src/fields/RadioGroup/defaultProps.ts
var options3 = [
    {
        value: "1",
        label: "option1"
    },
    {
        value: "2",
        label: "option2"
    },
    {
        value: "3",
        label: "option3"
    }
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
var Index7 = function(param) {
    var name = param.name, label = param.label, defaultValue = param.defaultValue, isHidden = param.isHidden, isRequired = param.isRequired, isTouched = param.isTouched, error = param.error, isWithRequiredStar = param.isWithRequiredStar, onValueChange = param.onValueChange, options4 = param.options, direction = param.direction;
    var handleChange = useLogic4({
        defaultValue: defaultValue,
        onValueChange: onValueChange,
        options: options4
    }).handleChange;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FieldContainer_default2, {
        isHidden: isHidden,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_RadioGroup.default, {
                "aria-labelledby": "demo-radio-buttons-group-label",
                defaultValue: "female",
                name: name,
                onChange: handleChange,
                children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(RadioWrapper, {
                    direction: direction,
                    children: options4 === null || options4 === void 0 ? void 0 : options4.map(function(option) {
                        return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_FormControlLabel2.default, {
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
                        }, option.label);
                    })
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ErrorMessage_default2, {
                error: error,
                isTouched: isTouched
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
var Container3 = import_styled_components9.default.div(_templateObject15());
var DropArea = import_styled_components9.default.div(_templateObject16());
var Wrapper = import_styled_components9.default.div(_templateObject17(), function(param) {
    var error = param.error;
    return error ? "red" : "#1d292e";
}, function(param) {
    var error = param.error;
    return error ? "red" : "#1d292e";
});
var Info = import_styled_components9.default.div(_templateObject18());
var Text = import_styled_components9.default.span(_templateObject19());
var UploadButton = import_styled_components9.default.button(_templateObject20());
var RemoveIcon = (0, import_styled_components9.default)(import_RemoveCircleOutline.RemoveCircleOutline)(_templateObject21());
var UploadIcon = (0, import_styled_components9.default)(import_Upload.Upload)(_templateObject22());
var EyeIcon = (0, import_styled_components9.default)(import_EyeOutline.EyeOutline)(_templateObject23());
var LabelWrapper3 = import_styled_components9.default.div(_templateObject24());
var StyledLabel3 = import_styled_components9.default.label(_templateObject25());
var LoaderWrapper = import_styled_components9.default.div(_templateObject26());
// src/fields/FileSelector/defaultProps.ts
var defaultProps8 = {
    label: "File Selector",
    placeholder: '"Drag & Drop or Click to Browse"',
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
var Index8 = function(param) {
    var label = param.label, isRequired = param.isRequired, isTouched = param.isTouched, error = param.error, isWithRequiredStar = param.isWithRequiredStar;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(FieldContainer_default2, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Wrapper, {
                error: isTouched && !!error || false
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ErrorMessage_default2, {
                error: error,
                isTouched: isTouched
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
var Index9 = function(param) {
    var label = param.label, isHidden = param.isHidden, isRequired = param.isRequired, isTouched = param.isTouched, error = param.error, isWithRequiredStar = param.isWithRequiredStar, onValueChange = param.onValueChange, locale = param.locale;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(FieldContainer_default2, {
        isHidden: isHidden,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
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
                error: error,
                isTouched: isTouched
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
var Index10 = function(param) {
    var label = param.label, isHidden = param.isHidden, isRequired = param.isRequired, isTouched = param.isTouched, error = param.error, isWithRequiredStar = param.isWithRequiredStar, locale = param.locale;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(FieldContainer_default2, {
        isHidden: isHidden,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_LocalizationProvider2.LocalizationProvider, {
                dateAdapter: import_AdapterDayjs2.AdapterDayjs,
                adapterLocale: locale,
                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_Stack2.default, {
                    spacing: 3
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ErrorMessage_default2, {
                error: error,
                isTouched: isTouched
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
var Index11 = function(param) {
    var label = param.label, isHidden = param.isHidden, isRequired = param.isRequired, isTouched = param.isTouched, error = param.error, isWithRequiredStar = param.isWithRequiredStar;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(FieldContainer_default2, {
        isHidden: isHidden,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FieldLabel_default2, {
                label: label,
                isRequired: isRequired,
                isWithRequiredStar: isWithRequiredStar
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {}),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ErrorMessage_default2, {
                error: error || "",
                isTouched: isTouched
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
    CheckboxGroup: CheckboxGroup,
    DatePicker: DatePicker,
    FileSelector: FileSelector,
    Input: Input,
    Number: Number,
    RadioGroup: RadioGroup,
    Select: Select,
    TimePicker: TimePicker
});
