import formatDate from "./format-date";

test("formats date to english when 'en' locale is passed", () => {
  expect(formatDate("01-01-1970")).toBe("1/1/1970");
});

test("formats date to dutch when 'nl' locale is passed", () => {
  expect(formatDate("01-01-1970", "nl")).toBe("1-1-1970");
});

test("formats date to year when config with year is passed", () => {
  expect(formatDate("01-01-1970", "en", { year: "numeric" })).toBe("1970");
});
