import React, { useEffect, useState, useReducer } from "react";

import Index from "../../DynamicForm";
import { initialEditProfileFields } from "./initialEditProfileFields";
import { reducer } from "./editProfileFormReducer";

const governorates = [
  { value: "medenine", label: "Medenine" },
  { value: "tataouine", label: "Tataouine" },
  { value: "gabes", label: "Gabes" },
];

const municipalities = {
  medenine: [
    { value: "medenine", label: "Medenine" },
    { value: "djerba", label: "Djerba" },
    { value: "zarsis", label: "Zarsis" },
  ],
  tataouine: [
    { value: "tataouine", label: "Tataouine" },
    { value: "ghomrassen", label: "Ghomrassen" },
    { value: "bir lahmer", label: "Bir Lahmer" },
  ],
  gabes: [
    { value: "gabes", label: "Gabes" },
    { value: "mareth", label: "Mareth" },
    { value: "zarat", label: "Zarat" },
  ],
};
const placement = [
  [0, 1],
  [2, 3, 4],
  [5, -1],
  [6, 7],
];
const defaultValues = {
  cin: "99999999",
  phoneNumber: "28012516",
  firstName: "mohamed",
  lastName: "jrad",
  birthDate: "1995-04-23T18:25:43.511Z",
  gender: "male",
  address: " sousse",
  governorate: "medenine",
  municipality: "djerba",
};

const EditProfile = () => {
  const [fields, dispatch] = useReducer(reducer, initialEditProfileFields);
  const [selectedGovId, setSelectedGovId] = useState();

  useEffect(() => {
    dispatch({
      type: "UpdateDefaultValues",
      defaultValues,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "UpdateGovernoratesList",
      options: governorates,
      setSelectedGovId,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "UpdateMunicipalitiesList",
      options: municipalities[selectedGovId],
    });
  }, [selectedGovId]);

  return <Index fields={fields} placement={placement} fieldRightMargin={150} />;
};

export default EditProfile;
