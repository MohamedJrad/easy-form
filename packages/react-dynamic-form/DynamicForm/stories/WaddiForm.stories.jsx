/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Index from "../DynamicForm";

export default {
  title: 'DynamicForm/WaddiForm',
  component: Index,
};

const Template = (args) => (
  <Index {...args}>
    <div
      style={{
        background: "green",
        width: "100%",
      }}
    >
      <button type="submit">submit</button>
    </div>
  </Index>
);
export const WaddiForm = Template.bind({});
WaddiForm.args = {
  placement: [
    [0, 1],
    [2, -1],
    [3, 4],
  ],
  fieldRightMargin: 100,
  fields: [
    {
      type: "number",
      maxLength: 8,
      name: "cin",
      label: "",
      placeholder: "CIN",
      isRequired: true,
      fieldIsRequiredMessage: "This field is required!",
      validateOnValueChange: true,
      validations: [
        {
          name: "customValidation1",
          message: "custom validation message1",
          validation: (value) => value === "1" || value === "3",
        },
        {
          name: "customValidation2",
          message: "custom validation message2",
          validation: (value) => value === "2" || value === "3",
        },
      ],
    },
    {
      type: "text",
      name: "firstName",
      label: "",
      placeholder: "first Name",
      required: true,
      fieldIsRequiredMessage: "field is required",
    },
    {
      type: "text",
      name: "lastName",
      label: "",
      placeholder: "last Name",
      required: true,
    },
    {
      type: "number",
      maxLength: 8,
      name: "phoneNumber",
      label: "",
      placeholder: "phone Number",
      required: true,
    },
  ],
};
