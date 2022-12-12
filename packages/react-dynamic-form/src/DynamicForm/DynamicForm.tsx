import { adjustFields } from "../helpers/adjustFields";
import { defaultProps } from "./defaultProps";
import FormikContext from "../formik/FormikContext";
import Form from "../formik/FormikForm";
import { Props } from "./types";

const Index = ({
  fields,
  onSubmit,
  submitButtonLabel,
  placement,
  fieldMinWidth,
  fieldRightMargin,
  children,
}: // theme,
Props) => {
  if (fields?.length === 0) return <div />;

  let adjustedFields = fields;
  if (placement && placement.length > 0) {
    adjustedFields = adjustFields(fields, placement);
  }

  return (
    <FormikContext fields={fields} onSubmit={onSubmit} dir="rtl">
      <Form
        key="form"
        fields={adjustedFields}
        submitButtonLabel={submitButtonLabel}
        fieldMinWidth={fieldMinWidth}
        fieldRightMargin={fieldRightMargin}
      >
        {children}
      </Form>
    </FormikContext>
  );
};

Index.defaultProps = defaultProps;
export default Index;
