import { useState, useEffect } from "react";
// import { handleValue } from "./helpers/handleValue";
import { ILogic } from "./types";

export const useLogic = ({
  // type,
  defaultValue,
  // maxLength,
  onValueChange,
}: ILogic) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (v: string) => {
    setValue(v);
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
