const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

export const adjustFields = (fields, placement) => {
  const isArray = (e) => Array.isArray(e);
  const isIndex = (number) => inRange(number, 0, fields.length - 1);

  const newFields = [];
  if (placement && placement.length > 0) {
    placement.forEach((element) => {
      let list = [];
      if (isArray(element)) {
        if (element.length > 0) {
          list = adjustFields(fields, element);
          newFields.push(list);
        }
      } else if (isIndex(element)) {
        newFields.push(fields[element]);
      } else if (element === -1) {
        newFields.push({ type: "none", name: "none" });
      }
    });

    return newFields;
  }
  return fields;
};
