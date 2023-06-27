import { getDate, toDate } from "../date";
import { DateObject } from "../date/date.model";
import { Options, defaultOptions } from "../options";

export const format = (
  date: Date | Partial<DateObject>,
  options: Partial<Options> = {}
) => {
  const d = toDate(date);

  const opts = { ...defaultOptions, ...options };

  const obj_padded = getDate(d, { ...opts, padded: true });
  const obj = getDate(d, { ...opts, padded: true });

  const replacers = {
    DD: obj_padded.day,
    Day: obj.weekday_name,
    Da: obj.weekday_abbr,
    D: obj.day,
    MM: obj_padded.month,
    Month: obj.month_name,
    Mo: obj.month_abbr,
    M: obj.month,
    mm: obj_padded.minutes,
    m: obj.minutes,
    ss: obj_padded.seconds,
    s: obj.seconds,
    hh: obj_padded.hours,
    h: obj.hours,
    YY: obj.year,
    Y: (obj_padded.year as string).substring(2, 4),
  };

  let template = opts.template;

  Object.entries(replacers).forEach(([key, value]) => {
    if (template.indexOf(key) < 0) return;
    const regex = new RegExp(key, "g");
    template = template.replace(regex, `${value}`);
  });

  return template;
};
