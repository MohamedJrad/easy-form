import { useState, useEffect } from "react";

export const useLogic = ({ onValueChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | "">("");

  const onDrop = (e) => {
    setSelectedFile(e[0]);
  };
  const removeFile = (e) => {
    e.stopPropagation();
    setSelectedFile("");
  };

  useEffect(() => {
    if (typeof onValueChange === "function") {
      onValueChange(selectedFile);
    }
  }, [selectedFile]);

  return { onDrop, removeFile, selectedFile };
};
