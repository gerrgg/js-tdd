const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      return a / b;
    } catch (e) {
      return e;
    }
  },
};

export default calculator;
