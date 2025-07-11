let is24Hour = false;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = "AM";

  if (!is24Hour) {
    session = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  const time = `${hours}:${minutes}:${seconds} ${!is24Hour ? session : ""}`;
  document.getElementById("clock").textContent = time;

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").textContent = now.toLocaleDateString(undefined, dateOptions);
}

function toggleFormat() {
  is24Hour = document.getElementById("formatToggle").checked;
  updateClock();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

setInterval(updateClock, 1000);
updateClock(); // run once immediately
