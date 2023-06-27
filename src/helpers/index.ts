export const pad = (value: number): string => `${value}`.padStart(2, "0");
export const flattenObject = (
    obj: Object,
    parentKey?: string
  ): { [key: string]: string } => {
    let result = {};
  
    Object.entries(obj).forEach(([key, value]) => {
      const _key = parentKey ? parentKey + "." + key : key;
      if (typeof value === "object") {
        result = { ...result, ...flattenObject(value, _key) };
      } else {
        //@ts-ignore
        result[_key] = value;
      }
    });
  
    return result;
  };