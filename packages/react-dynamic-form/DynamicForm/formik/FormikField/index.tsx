import React, { useState, useEffect } from "react";
import { Field } from "formik";
import FieldSwitcher from "../../FieldSwitcher";
import { Props, Dir } from "./types";
import { Wrapper } from "./styles";

const Index = ({
  field,
  onValueChange,
  fieldRightMargin,
  fieldMinWidth,
}: Props) => {
  const [dir, setDir] = useState<Dir>("ltr");

  useEffect(() => {
    setDir((document.dir as Dir) || "ltr");
  }, []);

  return (
    <Field name={field.name}>
      {({ meta }) => {
        const modifiedField = {
          ...field,
          onValueChange: onValueChange(field),
        };
        return (
          <Wrapper
            fieldMinWidth={fieldMinWidth}
            fieldRightMargin={fieldRightMargin}
            dir={dir}
          >
            <FieldSwitcher field={modifiedField} meta={meta} />
          </Wrapper>
        );
      }}
    </Field>
  );
};

export default Index;
