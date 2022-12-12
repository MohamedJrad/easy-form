import { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { Dir, OnValueChangeType } from "./types";
import { Meta, Field } from "../../types";

export const useLogic = (field: Field, onValueChange?: OnValueChangeType) => {
  const [dir, setDir] = useState<Dir>("ltr");
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [meta, setMeta] = useState<Meta>({ error: "", isTouched: false });

  const { errors, touched } = useFormikContext();

  const modifiedField: Field = {
    ...field,
    onValueChange,
  };
  useEffect(() => {
    setDir((document.dir as Dir) || "ltr");
  }, [setDir]);

  useEffect(() => {
    type ObjectKey = keyof typeof errors;
    const name = field.name as ObjectKey;
    setError(errors[name]);
  }, [errors, setError, field]);

  useEffect(() => {
    type ObjectKey = keyof typeof touched;
    const name = field.name as ObjectKey;
    setIsTouched(touched[name]);
  }, [touched, setIsTouched, field]);

  useEffect(() => {
    setMeta({
      isTouched,
      error,
    });
  }, [isTouched, error, setMeta]);

  return { meta, dir, modifiedField };
};
