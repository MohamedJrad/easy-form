/* eslint-disable react/jsx-props-no-spreading */

import React from "react";

import Index from "../DynamicForm";

export default {
  title: 'DynamicForm',
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const UploadFilesForm = Template.bind({});
UploadFilesForm.args = {
  fields: [
    {
      type: "file",
      name: "file1",
      label: "File 1",
      isRequired: true,
      supportedFormats: [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "application/pdf",
      ],
      maxFileSizeMB: 5,
      fieldIsRequiredMessage: "field is required",
      unsupportedFileFormatMessage: "Unsupported File Format",
      FileSizeIsLargeMessage: "File Size is too large",
      options: [
        { value: "option1", label: "option1" },
        { value: "option2", label: "option2" },
        { value: "option3", label: "option3" },
      ],
    },
    {
      type: "file",
      name: "file2",
      label: "File 2",
      isRequired: true,
      supportedFormats: [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "application/pdf",
      ],
      maxFileSizeMB: 0.2,
      fieldIsRequiredMessage: "field is required",
      unsupportedFileFormatMessage: "Unsupported File Format",
      FileSizeIsLargeMessage: "File Size is too large",
      options: [
        { value: "option1", label: "option1" },
        { value: "option2", label: "option2" },
        { value: "option3", label: "option3" },
      ],
    },
    {
      type: "file",
      name: "file3",
      label: "File 3",
      isRequired: true,
      supportedFormats: [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "application/pdf",
      ],
      maxFileSizeMB: 5,
      fieldIsRequiredMessage: "field is required ",
      unsupportedFileFormatMessage: "Unsupported File Format",
      FileSizeIsLargeMessage: "File Size is too large",
      options: [
        { value: "option1", label: "option1" },
        { value: "option2", label: "option2" },
        { value: "option3", label: "option3" },
      ],
    },
  ],
};
