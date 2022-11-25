import React, { useState, useEffect } from "react";
import { ICheckbox } from "./types";

export const useLogic = ({ options, onValueChange }) => {
  const [value, setValue] = useState<string[] | []>([]);
  const [checkboxGroup, setCheckboxGroup] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxGroup({
      ...checkboxGroup,
      [event.target.name]: {
        isChecked: event.target.checked,
        value: event.target.value,
        label: event.target.name,
      },
    });
  };

  useEffect(() => {
    const group: ICheckbox = {
      isChecked: false,
      value: "",
      label: "",
    };
    options?.forEach((element) => {
      group[element.label] = {
        isChecked: false,
        value: element.value,
        label: element.label,
      };
    });
    setCheckboxGroup(group);
  }, [options]);

  useEffect(() => {
    const checkedValues: string[] = [];
    const asArray = Object.entries(checkboxGroup);

    asArray.forEach((e: unknown) => {
      if (e[1].isChecked === true) {
        checkedValues.push(e[1].value);
      }
    });
    setValue(checkedValues);
  }, [checkboxGroup]);

  useEffect(() => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  }, [value, onValueChange]);

  return { handleChange };
};
