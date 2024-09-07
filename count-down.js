$(document).on("click", function () {
  document.getElementById("my_audio").play();
  console.log("Shaadi me zaroor aana");
});

// Set the date we're counting down to
var countDownDate = new Date("11-25-2024").getTime();

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

// // Setting the Launch Date.
// var comingdate = new Date("November 25, 2024 00:00:00");

// // Accepting the elements.
// var d = document.getElementById("d");
// var h = document.getElementById("h");
// var m = document.getElementById("m");
// var s = document.getElementById("s");

// // Making Countdown work.
// var x = setInterval(function () {
//   var now = new Date();
//   var des = comingdate.getTime() - now.getTime();
//   var days = Math.floor(des / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
//   var secs = Math.floor((des % (1000 * 60)) / 1000);

//   d.innerHTML = getTrueNumber(days);
//   h.innerHTML = getTrueNumber(hours);
//   m.innerHTML = getTrueNumber(mins);
//   s.innerHTML = getTrueNumber(secs);

//   if (des <= 0) {
//     clearInterval(x);
//     d.innerHTML = "00";
//     h.innerHTML = "00";
//     m.innerHTML = "00";
//     s.innerHTML = "00";
//   }
// }, 1000);

// function getTrueNumber(x) {
//   if (x < 10) return "0" + x;
//   else return x;
// }
