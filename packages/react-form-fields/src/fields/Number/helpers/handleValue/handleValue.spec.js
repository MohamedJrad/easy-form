import { handleValue } from "./index";

describe("Input handleValue function", () => {
  it("take string as a value", async () => {
    const value = "some text";
    const type = "text";
    const maxLength = 25;

    const result = handleValue({ value, type, maxLength });

    expect(result).toBe("some text");
  });

  it("take string longer than the maxLength as a value", async () => {
    const value = "some text some text some text";
    const type = "text";
    const maxLength = 8;

    const result = handleValue({ value, type, maxLength });

    expect(result).toBe("some tex");
  });
  it("take number as a value", async () => {
    const value = 3209923;
    const type = "number";
    const maxLength = 8;

    const result = handleValue({ value, type, maxLength });

    expect(result).toBe("3209923");
  });

  it("take number longer than the maxLength as a value", async () => {
    const value = 3209923000;
    const type = "number";
    const maxLength = 8;

    const result = handleValue({ value, type, maxLength });

    expect(result).toBe("32099230");
  });

  it("take textarea as a type", async () => {
    const value = "some text";
    const type = "textarea";
    const maxLength = 25;

    const result = handleValue({ value, type, maxLength });

    expect(result).toBe("some text");
  });
});
