import { useState, useEffect, ChangeEvent } from "react";
import { ILogic } from "./types";

export const useLogic = ({ defaultValue, onValueChange }: ILogic) => {
  const [value, setValue] = useState<string>(defaultValue || "none");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "none") {
      setValue(event.target.value);
    }
  };

  useEffect(() => {
    setValue(defaultValue || "none");
  }, [defaultValue]);

  useEffect(() => {
    if (typeof onValueChange === "function") {
      if (value !== "none") {
        onValueChange(value);
      }
    }
  }, [value, onValueChange]);

  return { value, handleChange };
};
