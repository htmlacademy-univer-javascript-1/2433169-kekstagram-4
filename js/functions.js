const stringLengthChecking = (charset, maxLength) => charset.length <= maxLength;

stringLengthChecking('проверяемая строкаddddd', 20);


const checkPalindrome = (str) => str.split('').reverse().join('').toLowerCase().replace(/\s/g, '') === str.toLowerCase().replace(/\s/g, '');

checkPalindrome('Лёша на полке клопа нашёл ');

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
returnNumber(2023);


function isMeetingWithinWorkingHours(startWorkingDay, endWorkingDay, startMeeting, durationMeeting) {
  const startMinutes = convertToMinutes(startWorkingDay);
  const endMinutes = convertToMinutes(endWorkingDay);
  const meetingStartMinutes = convertToMinutes(startMeeting);
  const meetingEndMinutes = meetingStartMinutes + durationMeeting;

  if (meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes) {
    return true;
  } else {
    return false;
  }
}

function convertToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}
isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90);
