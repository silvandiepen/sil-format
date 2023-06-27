import { flattenObject } from "../helpers";
import { defaultOptions, Options } from "../options";
import { Language } from "../types";

import am from "./data/am";
import ar from "./data/ar";
import bg from "./data/bg";
import cy from "./data/cy";
import de from "./data/de";
import dk from "./data/dk";
import en from "./data/en";
import es from "./data/es";
import et from "./data/et";
import fi from "./data/fi";
import fr from "./data/fr";
import gr from "./data/gr";
import hu from "./data/hu";
import ir from "./data/ir";
import it from "./data/it";
import la from "./data/la";
import lt from "./data/lt";
import mt from "./data/mt";
import nl from "./data/nl";
import no from "./data/no";
import pe from "./data/pe";
import pl from "./data/pl";
import pt from "./data/pt";
import ro from "./data/ro";
import ru from "./data/ru";
import sv from "./data/sv";

// export const Month = {
export const copy = {
  [Language.AM]: am,
  [Language.AR]: ar,
  [Language.BG]: bg,
  [Language.CY]: cy,
  [Language.DE]: de,
  [Language.DK]: dk,
  [Language.EN]: en,
  [Language.ES]: es,
  [Language.ET]: et,
  [Language.FI]: fi,
  [Language.FR]: fr,
  [Language.GR]: gr,
  [Language.HU]: hu,
  [Language.IR]: ir,
  [Language.IT]: it,
  [Language.LA]: la,
  [Language.LT]: lt,
  [Language.MT]: mt,
  [Language.NL]: nl,
  [Language.NO]: no,
  [Language.PE]: pe,
  [Language.PL]: pl,
  [Language.PT]: pt,
  [Language.RO]: ro,
  [Language.RU]: ru,
  [Language.SV]: sv,
};


export const getCopy = (value: string, options: Partial<Options>) => {
  const opts = {
    ...defaultOptions,
    ...options,
  };


  const langData = flattenObject(copy[opts.language]);

  if (!isNaN(opts.index) && opts.index > -1) {
    const key = `${value}.${opts.index}`;
    return langData[key] as any;
  }
  //@ts-ignore
  return copy[opts.language][value];
};
