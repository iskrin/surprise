const secondsContainer = document.getElementById("secondsContainer");
const minutesContainer = document.getElementById("minutesContainer");
const hoursContainer = document.getElementById("hoursContainer");
const daysContainer = document.getElementById("daysContainer");

const engagementTime = new Date("OCT 20, 2023 19:00:00").getTime();

var x = setInterval(function () {
  // Get today's date and time
  let currentTime = new Date().getTime();
  console.log(currentTime);

  // Find the distance between now and the count down date
  let distance = currentTime - engagementTime;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result"
  daysContainer.innerHTML = days;
  hoursContainer.innerHTML = hours;
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;

  //console.log(seconds, minutes, hours, days);
}, 1000);
