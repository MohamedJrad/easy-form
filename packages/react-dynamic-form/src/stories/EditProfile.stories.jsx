/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Index from "./EditProfile";

export default {
  title: 'DynamicForm',
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const EditProfile = Template.bind({});
