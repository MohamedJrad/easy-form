import React, { useState, useEffect } from "react";
import { Form, useFormikContext } from "formik";
import SubmitButton from "../../atoms/SubmitButton";
import FormikField from "../FormikField";
import { InlineFieldsContainer } from "./styles";

const Index = ({
  fields,
  submitButtonLabel,
  fieldMinWidth,
  fieldRightMargin,
  children,
}) => {
  const [currentField, setCurrentField] = useState();
  const { values, setFieldValue, setFieldTouched, submitCount } =
    useFormikContext();

  const props = useFormikContext();

  useEffect(() => {


  }, [props])



  const onValueChange = (field) => (value) => {
    setCurrentField(field);

    setFieldValue(field.name, value);


    if (typeof field.onValueChange === "function") {
      field.onValueChange(value);
    }
  };

  useEffect(() => {
    if (
      currentField &&
      typeof currentField.validateOnValueChange === "function"
    ) {
      if (values[currentField.name]) {
        setFieldTouched(currentField.name, true);
      } else if (!submitCount) {
        setFieldTouched(currentField.name, false);
      }
    }
  }, [values]);

  return (
    <Form>
      {fields.length > 0 && (
        <>
          {fields.map((field, i) => (
            <div key={i}>
              {Array.isArray(field) && (
                <InlineFieldsContainer>
                  {field.map((f) => (
                    <div
                      key={f.name}
                      style={{ flexGrow: 1, fieldMinWidth: `${fieldMinWidth}` }}
                    >
                      <FormikField
                        field={f}
                        onValueChange={onValueChange}
                        fieldRightMargin={fieldRightMargin}
                        fieldMinWidth={fieldMinWidth}
                      />
                    </div>
                  ))}
                </InlineFieldsContainer>
              )}
              {!Array.isArray(field) && (
                <FormikField
                  key={field.name}
                  field={field}
                  onValueChange={onValueChange}
                  fieldRightMargin={fieldRightMargin}
                  fieldMinWidth={fieldMinWidth}
                />
              )}
            </div>
          ))}
        </>
      )}
      {children}
      {!children && <SubmitButton>{submitButtonLabel}</SubmitButton>}
    </Form>
  );
};

export default Index;
