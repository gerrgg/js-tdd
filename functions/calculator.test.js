import calculator from "./calculator";

test("2+2 = 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("2-2 = 0", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test("2/1 = 2", () => {
  expect(calculator.divide(2, 1)).toBe(2);
  expect(calculator.divide(2, 0)).toBe(Infinity);
});

test("5*5 = 25", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
