export const Language = {
  AM: "Armenian",
  AR: "Arabic",
  BG: "Bulgarian",
  CY: "Welsh",
  DE: "German",
  DK: "Danish",
  EN: "English",
  ES: "Spanish",
  ET: "Estonian",
  FI: "Finnish",
  FR: "French",
  GR: "Greek",
  HU: "Hungarian",
  IR: "Irish",
  IT: "Italian",
  LA: "Latvian",
  LT: "Lithuanian",
  MT: "Maltese",
  NL: "Dutch",
  NO: "Norwegian",
  PE: "Persian",
  PL: "Polish",
  PT: "Portuguese",
  RO: "Romanian",
  RU: "Russian",
  SV: "SWEDISH",
};
export type Language = (typeof Language)[keyof typeof Language];
