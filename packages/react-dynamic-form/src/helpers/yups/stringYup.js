import * as Yup from "yup";

export const stringYup = ({
  isRequired,
  fieldIsRequiredMessage,
  validations,
}) => {
  let schema = Yup.string()[isRequired ? "required" : "optional"](
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
