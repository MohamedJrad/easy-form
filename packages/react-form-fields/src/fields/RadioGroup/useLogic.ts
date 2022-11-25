import React, { useState, useEffect } from "react";

export const useLogic = ({ options, defaultValue, onValueChange }) => {
  const [value, setValue] = useState<{ value: string; label: string }>(
    defaultValue || { value: "", label: "" }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = options?.filter(
      (option) => option.value === (event.target as HTMLInputElement).value
    )[0];

    setValue(selectedOption || { value: "option1", label: "option1" });
  };

  useEffect(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value?.value);
    }
  }, [value, onValueChange]);

  return { handleChange };
};
