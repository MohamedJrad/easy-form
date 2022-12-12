import { Form } from "formik";
import SubmitButton from "../../atoms/SubmitButton";
import FormikField from "../FormikField";
import { InlineFieldsContainer } from "./styles";
import { useLogic } from "./useLogic";

const Index = ({
  fields,
  submitButtonLabel,
  fieldMinWidth,
  fieldRightMargin,
  children,
}) => {
  const { onValueChange } = useLogic();

  return (
    <Form>
      {fields.length > 0 && (
        <>
          {fields.map((field) => (
            <div key={field.toString()}>
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
