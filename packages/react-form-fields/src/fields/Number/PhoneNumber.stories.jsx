/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Index from "./index";

export default {
  title: 'fields/Number',
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const Default = Template.bind({});
export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: "26675997"
}

