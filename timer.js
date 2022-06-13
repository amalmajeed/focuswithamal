var startButton = document.querySelector("#startbutton");
var timerDisplay = document.querySelector("#clock");
var minutes = 45;
var btnDisable = false;

var StrtBtn = `<button id="startbutton" class="btn btn-success">Start</button>`;
var ResetBtn = `<button id="resetbutton" class="btn btn-danger">Reset</button>`;

// Function that triggers the count-down and updates the clock display in the html
const myTimer = async (time, clock) => {
  setTimeout(() => {}, 1000);
  for (let i = time - 1; i >= 0; --i) {
    let j = 59;
    if (!btnDisable) {
      break;
    }
    while (j % 60 >= 0) {
      if (!btnDisable) {
        break;
      }
      await new Promise((resolve, reject) => {
        // The padstart converts the seconds to XX double digit format with default pad value as '0'
        clock.innerHTML = `${String(i).padStart(2, "0")}:${String(j).padStart(
          2,
          "0"
        )}`;
        setTimeout(resolve, 1000);
        j = j - 1;
      });
    }
  }
  btnDisable = false;
  clock.innerHTML = "45:00"; // Need to add reset functionality
};

startButton.addEventListener("click", () => {
  if (!this.btnDisable) {
    btnDisable = true;
    this.startButton.innerHTML = "Reset";
    this.startButton.classList.add("btn-danger");
    this.startButton.classList.remove("btn-success");
    myTimer(this.minutes, this.timerDisplay);
  } else {
    btnDisable = false;
    this.startButton.innerHTML = "Start";
    this.startButton.classList.add("btn-success");
    this.startButton.classList.remove("btn-danger");
    this.timerDisplay.innerHTML = `45:00`;
  }
});

// window.onload = MainLogic;
