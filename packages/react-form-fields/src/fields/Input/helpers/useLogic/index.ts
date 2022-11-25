import { useState, useEffect, ChangeEvent } from "react";
import { handleValue } from "../handleValue";
import { ILogic } from "../../types";

export const useLogic = ({
  type,
  defaultValue,
  maxLength,
  onValueChange,
}: ILogic) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(handleValue({ value: event.target.value, type, maxLength }));
  };

  useEffect(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value, onValueChange]);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  return { handleChange, value };
};
