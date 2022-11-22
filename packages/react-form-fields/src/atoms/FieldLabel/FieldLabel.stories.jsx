/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Index from "./index";

export default {
  title: 'Atoms/FieldLabel',
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const Default = Template.bind({});
