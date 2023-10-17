const stringLengthChecking = (charset, maxLength) => charset.length <= maxLength;
// eslint-disable-next-line no-console
console.log(stringLengthChecking('проверяемая строкаddddd', 20));


const checkPalindrome = (str) => str.split('').reverse().join('').toLowerCase().replace(/\s/g, '') === str.toLowerCase().replace(/\s/g, '');
// eslint-disable-next-line no-console
console.log(checkPalindrome('Лёша на полке клопа нашёл '));

const returnNumber = (str) => {
  const numbersArray = Array.from({ length: 10 }, (_, index) => index).toString();
  const numbersIncludedArray = [];
  for (const i of String(str)) {
    const numericValue = parseInt(i, 10);
    if (numbersArray.includes(numericValue)) {
      numbersIncludedArray.push(numericValue); }
    else {return NaN;} }
  return numbersIncludedArray.join('');
};
// eslint-disable-next-line no-console
console.log(returnNumber(2023));
