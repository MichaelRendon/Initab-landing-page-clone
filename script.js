/*CLOCK*/
(function clock() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let a = "PM";

  if(hours < 12) {
    // hours = "0" + hours;
    a = "AM";
  }
  if(hours > 12) {
    hours = hours - 12;
  }
  
  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  document.getElementById("time").innerHTML = hours + ':' + minutes;
  document.getElementById("change").innerHTML = a;
  document.getElementById("date").innerHTML = d.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});
  setTimeout(clock, 1000);
})();


/*CLICK-SUPPRESS INFO TEXT-BELOW-CLOCK*/
let close = document.getElementById("click-suppress");
close.addEventListener("click", function() {
  let none = document.getElementById("text-below-clock");
  none.style.display = "none";

  let clock = document.getElementById("clock");
  clock.style.marginTop = "3.5em";
});


