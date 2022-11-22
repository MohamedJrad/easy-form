/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Index from "./index";

export default {
  title: 'Fields/CheckboxGroup',
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const Default = Template.bind({});

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "horizontal",
};
