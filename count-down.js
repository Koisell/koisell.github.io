// $(document).on("click", function () {
//   document.getElementById("my_audio").play();
// });

// (function ($) {
//   "use strict";
//   $(".sakura-falling").sakura();
// })(jQuery);

// // Set the date we're counting down to
// var countDownDate = new Date("11-25-2024").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("days").innerHTML = "EXPIRED";
//     document.getElementById("hours").innerHTML = "EXPIRED";
//     document.getElementById("minutes").innerHTML = "EXPIRED";
//     document.getElementById("seconds").innerHTML = "EXPIRED";
//   }
// }, 1000);

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

const music = document.getElementById("music");
const volumeIcon = document.getElementById("volume-icon");

volumeIcon.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    volumeIcon.classList.remove("muted");
    volumeIcon.classList.add("fa-volume-up");
  } else {
    music.muted = true;
    volumeIcon.classList.add("muted");
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-off");
  }
});
