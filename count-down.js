// Set the date we're counting down to
var countDownDate = new Date(2024, 10, 25).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "EXPIRED";
    document.getElementById("minutes").innerHTML = "EXPIRED";
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 1000);

const music = document.getElementById("my_audio");
function toggleIcon() {
  const iconElement = document.getElementById("volume-icon");

  if (music.muted) {
    document.getElementById("my_audio").play();
    iconElement.classList.remove("fa-music");
    iconElement.classList.add("fa-volume-xmark");
    music.muted = false;
  } else {
    iconElement.classList.remove("fa-volume-xmark");
    iconElement.classList.add("fa-music");
    music.muted = true;
  }
}
