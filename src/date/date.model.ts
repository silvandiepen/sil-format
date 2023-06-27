type ZeroFive = 0 | 1 | 2 | 3 | 4 | 5;
type ZeroSix = 0 | 1 | 2 | 3 | 4 | 6;
type ZeroZero = ZeroFive | 6 | 7 | 8 | 9;

type ZeroTwelve =
  | "00"
  | "01"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";
type ZeroTwentyFour =
  | ZeroTwelve
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24";
type ZeroThirtyOne =
  | ZeroTwentyFour
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31";
export type Day = ZeroThirtyOne;
export type WeekDay = ZeroSix;
export type Month = ZeroTwelve;
export type Year = `${ZeroZero}${ZeroZero}${ZeroZero}${ZeroZero}`;
export type Hours = ZeroTwentyFour;
export type Minutes = `${ZeroFive}${ZeroZero}`;
export type Seconds = `${ZeroFive}${ZeroZero}`;

// export interface DateObject {
//   day: Day;
//   weekday: WeekDay;
//   weekday_name: string;
//   weekday_abbr: string;
//   month: Month;
//   month_name: string;
//   month_abbr: string;
//   year: Year;
//   hours: Hours;
//   minutes: Minutes;
//   seconds: Seconds;
// }

export interface DateObject {
  [key: string]: string | number;
}
