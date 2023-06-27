import { getCopy } from ".";
import { Language } from "../types";
import copy from "./data/en";

describe("getCopy", () => {

  it("Should get the right copy", () => {
    expect(getCopy("day", { language: Language.EN })).toEqual(copy.day);
  });

  it("Should get the right copy, by index", () => {
    expect(getCopy("day", { language: Language.EN, index: 0 })).toEqual(
      "Sunday"
    );
  });
  it("Should get the right copy, by index", () => {
    expect(getCopy("day", { language: Language.EN, index: 1 })).toEqual(
      "Monday"
    );
  });

});
