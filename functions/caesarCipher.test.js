import ceasarCipher from "./caesarCipher";

test("Return should be differant than original when given a shift value", () => {
  let str = "this is a great string";
  expect(ceasarCipher(str)).toMatch(str);
  expect(ceasarCipher(str, 1)).not.toMatch(str);
});
