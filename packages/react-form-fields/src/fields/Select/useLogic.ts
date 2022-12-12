import { useState, useEffect, ChangeEvent } from "react";
import { ILogic } from "./types";

export const useLogic = ({ defaultValue, onValueChange }: ILogic) => {
  const [value, setValue] = useState<string>(defaultValue || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setValue(event.target.value);
    }
  };

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  useEffect(() => {
    if (typeof onValueChange === "function") {
      if (value !== "") {
        onValueChange(value);
      }
    }
  }, [value, onValueChange]);

  return { value, handleChange };
};
