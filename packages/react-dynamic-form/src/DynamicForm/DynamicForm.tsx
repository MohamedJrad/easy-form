// import React from "react";
// // import { ThemeProvider } from "styled-components";
// import { adjustFields } from "./helpers/adjustFields";
// import { defaultProps } from "./defaultProps";
// import FormikContext from "./formik/FormikContext";
// import Form from "./formik/FormikForm";
// import { Props } from "./types";

// const Index = ({
//   fields,
//   onSubmit,
//   submitButtonLabel,
//   placement,
//   fieldMinWidth,
//   fieldRightMargin,
//   children,
// }: // theme,
// Props) => {
//   if (fields.length === 0) return <div />;

//   let adjustedFields = fields;
//   if (placement.length > 0) {
//     adjustedFields = adjustFields(fields, placement);
//   }

//   return (
//     <FormikContext fields={fields} onSubmit={onSubmit} dir="rtl">
//       <Form
//         key="form"
//         fields={adjustedFields}
//         submitButtonLabel={submitButtonLabel}
//         fieldMinWidth={fieldMinWidth}
//         fieldRightMargin={fieldRightMargin}
//       >
//         {children}
//       </Form>
//     </FormikContext>
//     // </ThemeProvider>
//   );
// };

// Index.defaultProps = defaultProps;
// export default Index;
import React from "react";

const DynamicForm = () => {
  return <div>DynamicForm</div>;
};

export default DynamicForm;
