import { Formik } from "formik";
import { useInitialValues } from "../../helpers/useInitialValues";
import { useValidationSchema } from "../../helpers/useValidationSchema";

const Index = ({ fields, onSubmit, children, dir }) => {
  const initialValues = useInitialValues(fields);
  const validationSchema = useValidationSchema(fields);

  return (
    <Formik
      dir={dir}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
};

export default Index;
