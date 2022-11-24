export const useInitialValues = (fields) => {
  if (fields.length > 0) {
    const initialValues = {};
    fields.forEach((e) => {
      initialValues[e.name] = e.defaultValue || "";
    });
    return initialValues;
  }
  return {};
};
