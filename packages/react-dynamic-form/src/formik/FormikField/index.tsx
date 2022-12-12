import { Field } from "formik";
import FieldSwitcher from "../../FieldSwitcher";
import { Wrapper } from "./styles";
import { Props } from "./types";
import { useLogic } from "./useLogic";

const Index = ({
  field,
  onValueChange,
  fieldRightMargin,
  fieldMinWidth,
}: Props) => {
  const { meta, dir, modifiedField } = useLogic(field, onValueChange);
  return (
    <Field name={field.name}>
      {() => (
        <Wrapper
          fieldMinWidth={fieldMinWidth}
          fieldRightMargin={fieldRightMargin}
          dir={dir}
        >
          <FieldSwitcher field={modifiedField} meta={meta} />
        </Wrapper>
      )}
    </Field>
  );
};

export default Index;
