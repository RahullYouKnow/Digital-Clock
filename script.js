let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#ampm");

function updateClock() {
  let today = new Date();
  let h = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  hours.textContent = h.toString().padStart(2, "0");
  minutes.textContent = min.toString().padStart(2, "0");

  seconds.textContent = sec.toString().padStart(2, "0");

  if (h < 12) {
    ampm.textContent = "AM";
  } else {
    ampm.textContent = "PM";
  }
}
updateClock();
setInterval(updateClock, 1000);
