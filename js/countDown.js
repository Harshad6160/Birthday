// Add this to your index.js file, before your existing code

// Set your target date here (Year, Month[0-11], Day, Hour, Minute)
const targetDate = new Date(2024, 10, 19, 0, 0).getTime()

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // If countdown is finished
  if (timeLeft <= 0) {
    document.getElementById("countdown-wrap").style.display = "none";
    document.querySelector(".merrywrap").style.display = "block";
    return;
  }

  // Calculate time units
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the display
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

// Modify your existing window.onload function
window.onload = function () {
  // Initialize countdown
  updateCountdown();
  // Update countdown every second
  setInterval(updateCountdown, 1000);

  // Your existing initialization code
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];

  function init() {
    box.addEventListener("click", openBox, false);
  }

  function stepClass(step) {
    merrywrap.className = "merrywrap";
    merrywrap.className = "merrywrap step-" + step;
  }

  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      reveal();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();
};
