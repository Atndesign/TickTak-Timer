function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");
if (getUrlVars()["minutes"]) {
  var minutes = getUrlVars()["minutes"];
} else {
  var minutes = 10;
}
var seconds = 0;
var interval = setInterval(countdown, 1000);
function countdown() {
  if (seconds === 0) {
    minutes -= 1;
    seconds = 59;
  } else {
    seconds -= 1;
  }
  minutesDisplay.innerHTML = extraZero(minutes);
  secondsDisplay.innerHTML = extraZero(seconds);
}
function extraZero(number) {
  if (number < 10) {
    return (number = "0" + number);
  } else {
    return number;
  }
}
