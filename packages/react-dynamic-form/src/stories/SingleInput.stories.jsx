/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Index from "../DynamicForm";

export default {
  title: 'DynamicForm',
  component: Index,
};

const Template = (args) => <Index {...args} />;
export const SingleInput = Template.bind({});
SingleInput.args = {
  fields: [
    {
      type: "text",
      name: "lastName",
      label: "",
      placeholder: "last Name",
      required: true,
    },
  ],
};
