const getMinutes = (time) =>{
  const result = time.split(':');

  return parseInt(result[0], 10) * 60 + parseInt(result[1], 10);
};

const IsMeetUpEnable = (startTime, endTime, startMeet, meetLength) => {
  const meetStartMinutes = getMinutes(startMeet);
  const minutesStart = getMinutes(startTime);
  const minutesEnd = getMinutes(endTime);

  return meetStartMinutes + meetLength <= minutesEnd && meetStartMinutes >= minutesStart && (minutesEnd - minutesStart) >= meetLength;

};

IsMeetUpEnable('08:00', '17:30', '14:00', 90);
