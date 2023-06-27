import { getDate } from ".";
import { Language } from "../types";

describe("test", () => {
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
