import * as Yup from "yup";
import { fileYup, arrayOfStringsYup, stringYup } from "./yups";

export const useValidationSchema = (fields) => {
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
        validations,
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
            validations,
          });
          break;
        case "checkboxGroup":
          validationObject[name] = arrayOfStringsYup({
            isRequired,
            fieldIsRequiredMessage,
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
            validations,
          });
          break;
        default:
          validationObject[name] = {};
          break;
        // case "phoneNumber":
        //   if (e.required) {
        //     validationObject[name] = Yup.string()
        //       .required(requiredMessage)
        //       .matches(/^[0-9 ]+$/, errorMessage)
        //       .min(8)
        //       .max(8);
        //   } else {
        //     validationObject[name] = Yup.string()
        //       .matches(/^[0-9 ]+$/, errorMessage)
        //       .min(8)
        //       .max(8);
        //   }
        //   break;
        // case "CinNumber":
        //   if (e.required) {
        //     validationObject[name] = Yup.string()
        //       .required(requiredMessage)
        //       .matches(/^[0-9 ]+$/, errorMessage)
        //       .min(8)
        //       .max(8);
        //   } else {
        //     validationObject[name] = Yup.string()
        //       .matches(/^[0-9 ]+$/, errorMessage)
        //       .min(8)
        //       .max(8);
        //   }
        //   break;
        // case "address":
        //   if (e.required) {
        //     validationObject[name] = Yup.string().required(requiredMessage);
        //   } else {
        //     validationObject[name] = Yup.string();
        //   }
        //   break;
        // case "birthDate":
        //   if (e.required) {
        //     validationObject[name] = Yup.date().required(requiredMessage);
        //   } else {
        //     validationObject[name] = Yup.date();
        //   }
        //   break;
      }
    });

    return Yup.object(validationObject);
  }
  return Yup.object();
};
