import * as Yup from "yup";

export const arrayOfStringsYup = ({
  required,
  fieldIsRequiredMessage,
  validations,
}) => {
  let schema = Yup.array()
    .of(Yup.string())
    [required ? "required" : "optional"](fieldIsRequiredMessage)
    .min(required ? 1 : 0, fieldIsRequiredMessage);

  if (validations && validations.length > 0) {
    validations.forEach((e) => {
      const { name, message, validation } = e;
      schema = schema.test(name, message, validation);
    });
  }

  return schema;
};
