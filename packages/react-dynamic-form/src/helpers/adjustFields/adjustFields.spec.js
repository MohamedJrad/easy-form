import {
  fieldsInitialState,
  fieldsWithOrderChanged,
  fieldsWidthNoneObject,
  fieldsContainArrayOfFields,
  fieldsContainNoneObjectInsideTheInnerArray,
} from "./fields";
import { adjustFields } from "./index";

const fields = fieldsInitialState;
describe("adjust fields when placement is empty ", () => {
  const placement = [];

  it("return the same fields object ", () => {
    expect(adjustFields(fields, placement)).toBe(fieldsInitialState);
  });
});

describe("adjust fields when placement is just indexes  ", () => {
  const placement = [0, 1, 2, 3, 4, 5];

  it("return the same fields object ", () => {
    expect(adjustFields(fields, placement)).toEqual(fieldsInitialState);
  });

  const placement2 = [1, 3, 5, 2, 0, 4];

  it("change the order according to the placement", () => {
    expect(adjustFields(fields, placement2)).toEqual(fieldsWithOrderChanged);
  });

  const placement3 = [0, 1, 2, 3, 4, 5, -1];
  it("add a none object when the placement contain -1", () => {
    expect(adjustFields(fields, placement3)).toEqual(fieldsWidthNoneObject);
  });
});

describe("adjust fields when placement contain array  ", () => {
  const placement = [0, 1, [], 2, 3, 4, 5];

  it("return the same fields object when the array is empty ", () => {
    expect(adjustFields(fields, placement)).toEqual(fieldsInitialState);
  });

  const placement2 = [0, 1, [2, 3], 4, 5];

  it("add the an array contain fields according to the inner array in placement", () => {
    expect(adjustFields(fields, placement2)).toEqual(
      fieldsContainArrayOfFields
    );
  });

  const placement3 = [0, 1, [2, -1], 3, 4, 5];

  it("add a none object to the inner array  when the placement  inner array contain -1", () => {
    expect(adjustFields(fields, placement3)).toEqual(
      fieldsContainNoneObjectInsideTheInnerArray
    );
  });
});
