import { format } from "./format";

describe("format", () => {
  it("Responds with a default date", () => {
    const date = new Date("2023 05 04");

    expect(format(date)).toEqual("2023-05-04 00:00:00");
  });
  it("Format a date from an object", () => {
    expect(
      format({
        day: 5,
        month: 4,
        year: 2017,
      })
    ).toEqual("2017-04-05 00:00:00");
  });

  it("Format with custom replacers", () => {
    expect(
      format(
        {
          day: 5,
          month: 4,
          year: 2017,
        },
        {
          template: "YY-XX",
          replace: {
            XX: "test",
          },
        }
      )
    ).toEqual("2017-test");
  });
});
