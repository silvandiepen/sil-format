import { Language } from "../types";
import { Options } from "./options.model";

export const defaultOptions: Options = {
  language: Language.EN,
  index: -1,
  padded: false,
  template: "YY-MM-DD hh:mm:ss",
  replace: {},
};
