import { getDate } from ".";
import { Language } from "../types";

describe("test", () => {
  it("Should return the date from the date now",()=>{

    const date = new Date();
    const result = getDate(date);
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('day');
    expect(result.day).toHaveReturnedWith(expect.any(Number));
    expect(result).toHaveProperty('month');
    expect(result.month).toHaveReturnedWith(expect.any(Number));
    expect(result).toHaveProperty('month_index');
    expect(result.month_index).toHaveReturnedWith(expect.any(Number));
    expect(result).toHaveProperty('month_name');
    expect(result.month_name).toHaveReturnedWith(expect.any(String));
    expect(result).toHaveProperty('month_abbr');
    expect(result.month_abbr).toHaveReturnedWith(expect.any(String));
    expect(result).toHaveProperty('weekday');    
    expect(result.weekday).toHaveReturnedWith(expect.any(String));
    expect(result).toHaveProperty('weekday_name');
    expect(result.weekday_name).toHaveReturnedWith(expect.any(String));

    expect(result).toHaveProperty('weekday_abbr');
    expect(result.weekday_abbr).toHaveReturnedWith(expect.any(String));

    expect(result).toHaveProperty('year');
    expect(result.year).toHaveReturnedWith(expect.any(Number));

    expect(result).toHaveProperty('hours');
    expect(result.hours).toHaveReturnedWith(expect.any(Number));

    expect(result).toHaveProperty('minutes');

    expect(result.minutes).toHaveReturnedWith(expect.any(Number));

    expect(result).toHaveProperty('seconds');
    expect(result.seconds).toHaveReturnedWith(expect.any(Number));

  

  });
  it("Should return the right formatted date object", () => {
    const date = new Date("2023 05 04");
    expect(getDate(date)).toEqual({
      day: 4,
      hours: 0,
      minutes: 0,
      month: 5,
      month_index: 4,
      month_name: "May",
      month_abbr: "may",
      seconds: 0,
      weekday: 4,
      weekday_name: "Thursday",
      weekday_abbr: "thu",
      year: 2023,
    });
  });
  it("Should return the right formatted date object, in Dutch", () => {
    const date = new Date("2023 05 04");
    expect(
      getDate(date, {
        language: Language.NL,
      })
    ).toEqual({
      day: 4,
      hours: 0,
      minutes: 0,
      month: 5,
      month_index: 4,
      month_name: "mei",
      month_abbr: "mei",
      seconds: 0,
      weekday: 4,
      weekday_name: "donderdag",
      weekday_abbr: "do",
      year: 2023,
    });
  });
  it("Should return the right formatted date object, in Dutch", () => {
    const date = new Date("2023 05 04");
    expect(
      getDate(date, {
        language: Language.NL,
        padded: true,
      })
    ).toEqual({
      day: "04",
      hours: "00",
      minutes: "00",
      month: "05",
      month_index: "04",
      month_name: "mei",
      month_abbr: "mei",
      seconds: "00",
      weekday: "04",
      weekday_name: "donderdag",
      weekday_abbr: "do",
      year: "2023",
    });
  });
});
