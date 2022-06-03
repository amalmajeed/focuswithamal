// var dom = document;
var startButton = document.querySelector("#startbutton");
var timerDisplay = document.querySelector("#clock");
var duration = 20;

// Function that triggers the count-down and updates the clock display in the html
const myTimer = async (time, clock) => {
  for (let i = time; i >= 0; --i) {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
      // The padstart converts the seconds to XX double digit format with default pad value as '0'
      clock.innerHTML = `00:${String(i).padStart(2, "0")}`;
    });
  }
  clock.innerHTML = "00:00"; // Need to add reset functionality
};

startButton.addEventListener("click", () => {
  myTimer(this.duration, this.timerDisplay);
});
