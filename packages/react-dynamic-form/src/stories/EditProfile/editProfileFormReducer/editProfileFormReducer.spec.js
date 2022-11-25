import { reducer } from "./index";
import { initialEditProfileFields } from "../initialEditProfileFields";
// import { updateGovernoratesListActionResult } from "./updateGovernoratesListActionResult";
// import { updateMunicipalitiesListActionResult } from "./updateMunicipalitiesListActionResult";
// import { updateDefaultValuesActionResult } from "./updateDefaultValuesActionResult";

// const mockFunction = jest.fn();

describe("test the reducer and actions", () => {
  it("should return the initial state", () => {
    expect(reducer(initialEditProfileFields, {})).toEqual(
      initialEditProfileFields
    );
  });

  it("should update  the governoratesList ", () => {
    // const options = [
    //   { value: "medenine", label: "Medenine" },
    //   { value: "tataouine", label: "Tataouine" },
    // ];
    // const result = reducer(initialEditProfileFields, {
    //   type: "UpdateGovernoratesList",
    //   options,
    //   setSelectedGovId: mockFunction,
    // });
    // expect(JSON.stringify(result)).toBe(
    //   JSON.stringify(updateGovernoratesListActionResult)
    // );
  });

  it("should update municipalitiesList ", () => {
    // const options = [
    //   { value: "medenine", label: "Medenine" },
    //   { value: "djerba", label: "Djerba" },
    //   { value: "zarsis", label: "Zarsis" },
    // ];
    // const result = reducer(initialEditProfileFields, {
    //   type: "UpdateMunicipalitiesList",
    //   options,
    // });
    // result.forEach((e, i) => {
    //   expect(e).toMatchObject(updateMunicipalitiesListActionResult[i]);
    // });
  });
});
it("should update Default Values ", () => {
  // const defaultValues = {
  //   cin: "99999999",
  //   phoneNumber: "28012516",
  //   firstName: "mohamed",
  //   lastName: "jrad",
  //   birthDate: "1998-04-23T18:25:43.511Z",
  //   gender: "male",
  //   address: "sousse",
  //   governorate: "medenine",
  //   municipality: "djerba",
  // };
  // const result = reducer(initialEditProfileFields, {
  //   type: "UpdateDefaultValues",
  //   defaultValues,
  // });
  // result.forEach((e, i) => {
  //   expect(e).toMatchObject(updateDefaultValuesActionResult[i]);
  // });
});
