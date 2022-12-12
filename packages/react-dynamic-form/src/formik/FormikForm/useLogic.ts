import { useEffect, useState } from "react";
import { useFormikContext } from "formik";

export const useLogic = () => {
  const [currentField, setCurrentField] = useState();
  const [currentValue, setCurrentValue] = useState();
  const { values, setFieldValue, setFieldTouched, submitCount } =
    useFormikContext();

  const onValueChange = (field) => (value) => {
    setCurrentField(field);
    setCurrentValue(value);
  };

  useEffect(() => {
    if (currentField && currentValue) {
      setFieldValue(currentField.name, currentValue);
    }
  }, [currentField, currentValue, setFieldValue]);

  useEffect(() => {
    if (
      currentField &&
      typeof currentField.validateOnValueChange === "function"
    ) {
      if (values[currentField.name]) {
        setFieldTouched(currentField.name, true);
      } else if (!submitCount) {
        setFieldTouched(currentField.name, false);
      }
    }
  }, [values, currentField, setFieldTouched, submitCount]);

  return { onValueChange };
};
