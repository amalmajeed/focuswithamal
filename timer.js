var startButton = document.querySelector("#startbutton");
var timerDisplay = document.querySelector("#clock");
var minutes = 45;
var btnDisable = false;

// const myTimer = (time, clock) => {
//   setTimeout(() => {}, 1000);
//   for (let i = time - 1; i >= 0; --i) {
//     let j = 59;
//     while (j % 60 >= 0) {
//       setTimeout(() => {}, 1000);
//       // The padstart converts the seconds to XX double digit format with default pad value as '0'
//       clock.innerHTML = `${String(i).padStart(2, "0")}:${String(j).padStart(
//         2,
//         "0"
//       )}`;
//       j = j - 1;
//     }
//   }
//   btnDisable = false;
//   clock.innerHTML = "45:00"; // Need to add reset functionality
// };

// Function that triggers the count-down and updates the clock display in the html
const myTimer = async (time, clock) => {
  setTimeout(() => {}, 1000);
  for (let i = time - 1; i >= 0; --i) {
    let j = 59;
    while (j % 60 >= 0) {
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
    myTimer(this.minutes, this.timerDisplay);
  }
});

// window.onload = MainLogic;
