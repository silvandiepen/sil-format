import { type DateObject } from "./date.model";
import { pad } from "../helpers";
import { getCopy } from "../copy";
import { defaultOptions, type Options } from "../options";

export const getDate = (
  value: Date,
  options: Partial<Options> = {}
): DateObject => {
  const opts = {
    ...defaultOptions,
    ...options,
  };

  return {
    day: opts.padded ? pad(value.getDate()) : value.getDate(),
    weekday: opts.padded ? pad(value.getDay()) : value.getDay(),
    weekday_name: getCopy("day", { ...opts, index: value.getDay() }),
    weekday_abbr: getCopy("day_short", {
      ...opts,
      index: value.getDay(),
    }),
    month: opts.padded ? pad(value.getMonth() + 1) : value.getMonth() + 1,
    month_index: opts.padded ? pad(value.getMonth()) : value.getMonth(),
    month_name: getCopy("month", { ...opts, index: value.getMonth() }),
    month_abbr: getCopy("month_short", {
      ...opts,
      index: value.getMonth(),
    }),
    year: opts.padded ? `${value.getFullYear()}` : value.getFullYear(),
    hours: opts.padded ? pad(value.getHours()) : value.getHours(),
    minutes: opts.padded ? pad(value.getMinutes()) : value.getMinutes(),
    seconds: opts.padded ? pad(value.getSeconds()) : value.getSeconds(),
  };
};

export const toDate = (value: Date | Partial<DateObject>): Date => {
  if (value instanceof Date) return value;
  else {
    const yrs = value.year || 1970;
    const mon = value.month || 1;
    const day = value.day || 1;
    const hrs = value.hrs || 0;
    const min = value.min || 0;
    const sec = value.sec || 0;

    return new Date(`${yrs} ${mon} ${day} ${hrs}:${min}:${sec}`);
  }
};
