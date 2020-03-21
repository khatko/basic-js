module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") throw "error";

  let month = date.getMonth();
  if ([0, 1, 11].includes(month)) {
    return "winter";
  } else if ([2, 3, 4].includes(month)) {
    return "spring";
  } else if ([5, 6, 7].includes(month)) {
    return "summer";
  } else { 
    return "autumn";
  } 
};
