const caesarCipher = (str, shift = 0) => {
  const createAlphabet = () => {
    /**
     * Create an array of the alphabet
     * @credit - https://stackoverflow.com/a/10050831/3247137
     */
    return String.fromCharCode(
      ...[...Array("z".charCodeAt(0) - "a".charCodeAt(0) + 1).keys()].map(
        (i) => i + "a".charCodeAt(0)
      )
    )
      .replace(/[^0-9a-z]/gi, "") // remove special characters
      .split(""); // back to string
  };

  // if before is not equal to after - convert it back to uppercase
  const maybeUpperCase = (result, before, after) =>
    before === after ? result : result.toUpperCase();

  // create range array
  let alphabet = createAlphabet();

  // init string
  let cipher = "";

  /**
   * Loop original string, convert each character to lowercase to compare with array
   * if the return fo adding the shift to the index of the alaphabet array is undefined return a space
   * else return the new character
   */
  cipher += str
    .split("")
    .map((char) => {
      let _char = char.toLowerCase();
      let newChar = alphabet[alphabet.indexOf(_char)];

      return typeof newChar !== "undefined"
        ? maybeUpperCase(
            alphabet[(alphabet.indexOf(_char) + shift) % alphabet.length],
            char,
            _char
          )
        : " ";
    })
    .join("");

  return cipher;
};

export default caesarCipher;
