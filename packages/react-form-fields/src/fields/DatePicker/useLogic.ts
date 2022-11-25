import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

export const useLogic = ({ onValueChange }) => {
  const [selectedDate, handleDateChange] = useState<Dayjs | undefined>(dayjs());

  useEffect(() => {
    if (typeof onValueChange === "function") {
      const date = dayjs(selectedDate).toDate();
      onValueChange(date);
    }
  }, [selectedDate, onValueChange]);
  return { handleDateChange, selectedDate };
};
