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
    console.log(
      "🚀 ~ file: useLogic.tsx ~ line 14 ~ handleChange ~ value",
      value
    );

    setValue(value);
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
