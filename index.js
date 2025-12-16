// camelCase
// Given a string, return its camel case version using the following rules:

// Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
// The first word should be all lowercase.
// Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
// All spaces and separators should be removed.

// camelCase
// Given a string, return its camel case version using the following rules:

// Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
// The first word should be all lowercase.
// Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
// All spaces and separators should be removed.

function toCamelCase(s) {
  // console.log(s);
  const resultArr = [];
  const regex = /[\s\-\_]+/g;
  let lower = s.toLowerCase();
  let arr = lower.split(regex);
  // console.log(arr);
  arr.forEach((x, i) => {
    if (i === 0) {
      // console.log(x);
      resultArr.push(x);
    } else {
      let firstChar = x[0];
      let upperChar = firstChar.toUpperCase();
      // console.log(upperChar);
      let result = upperChar + x.slice(1);
      // console.log(result);
      resultArr.push(result);
    }
    // console.log(resultArr);
  });
  return resultArr.join('');
  // return s;
}
