"use strict";
const functions = {
  isEven: function isEvenFaster(num) {
    //Data sanitization goes Brrr....
    //remove negative sign from the number
    const number = Math.abs(num);
    //if not number
    if (!typeof number === "Number") {
      throw new TypeError("isEven requires a number to check.");
    }
    if (!Number.isInteger(number)) {
      throw new Error("isEven requires an integer to chek.");
    }
    if (!Number.isSafeInteger(number)) {
      throw new Error("value exceeds maximum safe integer");
    }
    return !Boolean(number & 1);
  },
};
module.exports = functions;
