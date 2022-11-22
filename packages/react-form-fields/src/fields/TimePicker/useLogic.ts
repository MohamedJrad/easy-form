import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

export const useLogic = ({ onValueChange }) => {
  const [selectedTime, handleTimeChange] = useState<Dayjs | undefined>(dayjs());

  useEffect(() => {
    if (typeof onValueChange === "function") {
      const date = dayjs(selectedTime).toDate();
      onValueChange(date.toISOString());
    }
  }, [selectedTime]);

  return { handleTimeChange, selectedTime };
};
