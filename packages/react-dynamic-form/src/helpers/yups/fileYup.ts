import * as Yup from "yup";

export const fileYup = ({
  isRequired,
  supportedFormats,
  maxFileSizeMB,
  fieldIsRequiredMessage,
  unsupportedFileFormatMessage,
  FileSizeIsLargeMessage,
  validations,
}) => {
  let schema = Yup.mixed()
    [isRequired ? "required" : "optional"](fieldIsRequiredMessage)

    .test("fileType", unsupportedFileFormatMessage, (file) => {
      if (file) {
        return supportedFormats?.includes(file.type);
      }
      return true;
    })
    .test("fileSize", FileSizeIsLargeMessage, (file) => {
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
