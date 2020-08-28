import reverseString from "./reverseString";

test("Repeats the string in reverse", () => {
  expect(reverseString("AweSome")).toMatch("emoSewA");
});

test("Returns an empty string when not given one", () => {
  expect(reverseString()).toMatch("");
  expect(reverseString({})).toMatch("");
  expect(reverseString(1231)).toMatch("");
});
