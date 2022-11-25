/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Index from "../index";

export default {
  title: 'DynamicForm',
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
export const signUpWithCustomSubmitButton = Template.bind({});
signUpWithCustomSubmitButton.args = {
  fields: [
    {
      type: "number",
      name: "cin",
      label: "",
      placeholder: "CIN",
      required: true,
      fieldIsRequiredMessage: "This field is required!",
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
      name: "phoneNumber",
      label: "",
      placeholder: "phone Number",
      required: true,
    },
  ],
};
