import { string } from "yargs";

const reverseString = (str) => {
  let reverse = "";

  if (typeof str === "string")
    for (let i = str.length - 1; i >= 0; i--) reverse += str[i];

  return reverse;
};

reverseString("Greg");

export default reverseString;
