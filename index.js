function daysValidate(input) {
  var days = input.value;
  days = days.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  input.value = days;
}

function hourValidate(input) {
  var hour = input.value;
  if (hour > 23) hour = 23;
  hour = hour.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  input.value = hour;
}
var resumeTotalSecs;

var displayDays = document.getElementById("days");
var displayHours = document.getElementById("hours");
var displayMins = document.getElementById("min");
var displaySecs = document.getElementById("sec");
console.log(displayMins.innerHTML);

function startTimer() {
  var daysVal = document.getElementById("days-val");
  var hourVal = document.getElementById("hours-val");
  var minVal = document.getElementById("min-val");
  var secVal = document.getElementById("sec-val");

  //string to int

  var days = parseInt(daysVal.value) || 0;
  var hours = parseInt(hourVal.value) || 0;
  var mins = parseInt(minVal.value) || 0;
  var secs = parseInt(secVal.value) || 0;

  var totalSecs = days * (60 * 60 * 24) + hours * 3600 + mins * 60 + secs;
  console.log("total secs" + totalSecs);
  var counter = setInterval(function () {
    if (totalSecs <= 0) {
      clearInterval(counter);
      return;
    }
    totalSecs--;
    var updatedDays = Math.floor(totalSecs / (24 * 60 * 60));
    var updatedHours = Math.floor((totalSecs % (24 * 60 * 60)) / (60 * 60));
    var updatedMinutes = Math.floor((totalSecs % (60 * 60)) / 60);
    var updatedSecs = totalSecs % 60;

    displayDays.innerHTML = updatedDays;
    displayHours.innerHTML = updatedHours;
    displayMins.innerHTML = updatedMinutes;
    displaySecs.innerHTML = updatedSecs;
    console.log(displayDays, updatedHours, updatedMinutes, updatedSecs);
    resumeTotalSecs = totalSecs;
  }, 1000);

  var pause = document.getElementById("pause");
  pause.addEventListener("click", function () {
    clearInterval(counter);
  });

  var reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    clearInterval(counter);
    displayDays.innerHTML = 0;
    displayHours.innerHTML = 0;
    displayMins.innerHTML = 0;
    displaySecs.innerHTML = 0;
  });
}

function resumeTimer() {
  var resumeCounter = setInterval(function () {
    if (resumeTotalSecs <= 0) {
      clearInterval(counter);
      return;
    }
    resumeTotalSecs--;
    var updatedDays = Math.floor(resumeTotalSecs / (24 * 60 * 60));
    var updatedHours = Math.floor(
      (resumeTotalSecs % (24 * 60 * 60)) / (60 * 60)
    );
    var updatedMinutes = Math.floor((resumeTotalSecs % (60 * 60)) / 60);
    var updatedSecs = resumeTotalSecs % 60;

    displayDays.innerHTML = updatedDays;
    displayHours.innerHTML = updatedHours;
    displayMins.innerHTML = updatedMinutes;
    displaySecs.innerHTML = updatedSecs;
    console.log(displayDays, updatedHours, updatedMinutes, updatedSecs);
  }, 1000);

  var pause = document.getElementById("pause");
  pause.addEventListener("click", function () {
    clearInterval(resumeCounter);
  });

  var reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    clearInterval(resumeCounter);
    displayDays.innerHTML = 0;
    displayHours.innerHTML = 0;
    displayMins.innerHTML = 0;
    displaySecs.innerHTML = 0;
  });
}
