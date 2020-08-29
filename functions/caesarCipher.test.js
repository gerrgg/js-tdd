import ceasarCipher from "./caesarCipher";

const c = ceasarCipher();

test("should return the abcs in lowercase and split into arrays", () => {
  expect(c.createAlphabet()).toEqual([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
});

test("should capitalize the result when the original does not match the lowered character", () => {
  expect(c.maybeUpperCase("b", "A", "a")).toMatch("B");
});

test("should return bcd when given abc", () => {
  expect(c.encrypt("abc", 1)).toMatch("bcd");
});

test("should keep capitalization", () => {
  expect(c.encrypt("ABc", 1)).toMatch("BCd");
});

test("should keep spaces", () => {
  expect(c.encrypt("a b c", 1)).toMatch("b c d");
});

test("should return a differant string with differant shifts", () => {
  let str = "greg is cool";
  expect(c.encrypt(str, 1)).not.toMatch(c.encrypt(str, 2));
});
