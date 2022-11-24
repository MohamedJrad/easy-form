export const reducer = (state, action) => {
  switch (action.type) {
    case "UpdateGovernoratesList":
      return state.map((field) => {
        if (field.name === "governorate") {
          return {
            ...field,
            options: action.options,
            onValueChange: (e) => action.setSelectedGovId(e),
          };
        }
        return field;
      });
    case "UpdateMunicipalitiesList":
      return state.map((field) => {
        if (field.name === "municipality") {
          return { ...field, options: action.options };
        }
        return field;
      });

    case "UpdateDefaultValues":
      return state.map((field) => {
        const defaultValue =
          action.defaultValues[field.name] || field.defaultValue || "";

        return {
          ...field,
          defaultValue,
        };
      });
    default:
      return state;
  }
};
