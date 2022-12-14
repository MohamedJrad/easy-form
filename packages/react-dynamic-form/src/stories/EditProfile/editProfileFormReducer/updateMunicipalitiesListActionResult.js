export const updateMunicipalitiesListActionResult = [
  {
    type: "text",
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "phone Number",
    required: true,
    defaultValue: "",
    readOnly: false,
    hidden: false,
  },
  {
    type: "text",
    name: "job",
    label: "Job",
    placeholder: "placeholder",
    required: true,
    defaultValue: "",
    readOnly: false,
    hidden: false,
  },
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    placeholder: "placeholder",
    required: true,
    defaultValue: "",
    readOnly: false,
    hidden: false,
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
    placeholder: "placeholder",
    required: true,
    defaultValue: "",
    readOnly: false,
    hidden: false,
  },
  {
    type: "text",
    name: "cin",
    label: "CIN",
    placeholder: "placeholder",
    required: true,
    defaultValue: "",
    readOnly: false,
    hidden: false,
  },
  {
    type: "select",
    name: "gender",
    label: "Gender",
    required: true,
    options: [
      { value: "male", label: "male" },
      { value: "female", label: "female" },
    ],
  },
  {
    type: "birthDate",
    name: "birthDate",
    label: " Birth Date",
    readOnly: false,
    hidden: false,
    required: true,
    defaultValue: new Date().toISOString().substr(0, 10),
  },
  {
    type: "select",
    name: "governorate",
    label: "Governorate",
    required: true,

    options: [
      { value: "option1", label: "option1" },
      { value: "option2", label: "option2" },
      { value: "option3", label: "option3" },
    ],
  },
  {
    type: "select",
    name: "municipality",
    label: "Municipality",
    required: true,
    hidden: false,
    options: [
      { value: "medenine", label: "Medenine" },
      { value: "djerba", label: "Djerba" },
      { value: "zarsis", label: "Zarsis" },
    ],
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    required: true,
    options: [
      { value: "option1", label: "option1" },
      { value: "option2", label: "option2" },
      { value: "option3", label: "option3" },
    ],
  },
];
