export const defaultProps = {
  schema: {
    submitButtonLabel: 'Submit',
    resetButtonLabel: 'Reset',
    fieldMinWidth: 300,
    fieldRightMargin: 10,
    placement: [],
    fields: [
      {
        type: 'text',
        name: 'text',
        label: 'Text Input',
        placeholder: 'put some text here ...',
      },
      {
        type: 'textarea',
        name: 'textarea',
        label: 'Text Area',
        placeholder: 'put some text here ...',
      },
      // {
      //   type: "number",
      //   name: "number",
      //   label: "Number",
      //   placeholder: "put some number here ...",
      // },
      {
        type: 'email',
        name: 'email',
        label: 'Email ',
        placeholder: 'ex:helloworld@gmail.com',
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'password',
      },
      // {
      //   type: "date",
      //   name: "date",
      //   label: "Date Picker",
      // },
      // {
      //   type: "time",
      //   name: "time",
      //   label: "Time Picker",
      // },
      {
        type: 'file',
        name: 'file',
        label: 'File Selector',
        placeholder: 'drag and drop file here ...',
      },

      {
        type: 'select',
        name: 'select',
        label: 'Select',

        options: [
          { value: 'op1', label: 'Option 1' },
          { value: 'op2', label: 'Option 2' },
          { value: 'op3', label: 'Option 3' },
        ],
      },
      {
        type: 'radioGroup',
        name: 'radioGroup',
        label: 'Radio Group',

        options: [
          { value: 'op1', label: 'Option 1' },
          { value: 'op2', label: 'Option 2' },
          { value: 'op3', label: 'Option 3' },
        ],
      },
      {
        type: 'checkboxGroup',
        name: 'checkboxGroup',
        label: 'Checkbox Group',

        options: [
          { value: 'op1', label: 'Option 1' },
          { value: 'op2', label: 'Option 2' },
          { value: 'op3', label: 'Option 3' },
        ],
      },
    ],
  },
}
