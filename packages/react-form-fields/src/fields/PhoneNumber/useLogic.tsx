import { useState, useEffect, ChangeEvent } from "react";
import { handleValue } from "./helpers/handleValue";
import { ILogic } from "./types";

export const useLogic = ({
  type,
  defaultValue,
  maxLength,
  onValueChange,
}: ILogic) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (value) => {
    setValue(handleValue(value));
  };

  useEffect(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value]);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  return { handleChange, value };
};
