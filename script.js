/** @format */

function getCurrentDay() {
  const date = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekDays[date.getDay()];
  const today = "Current day of the week: " + day;
  document.getElementById("dayOfTheWeek").innerHTML = today;
}

function getMillisecondsUTCTime() {
  const date = new Date();
  const utcNow = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  const utcTime = "Current UTC time: " + utcNow.getTime();
  document.getElementById("time").innerHTML = utcTime;
  setTimeout(getMillisecondsUTCTime, 1000);
}

getCurrentDay();
getMillisecondsUTCTime();
