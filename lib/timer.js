// Imports

// import timerFunctions from "./events.js";
const { startTimer, resetTimer, focusDone, breakDone } = require("./events");

// Globals

var startButton = document.querySelector("#startbutton");
var timerDisplay1 = document.querySelector("#focusclock");
var timerDisplay2 = document.querySelector("#breakclock");
var focusMinutes = 1;
var breakMinutes = 5;
var btnDisable = false;

// Function that triggers the count-down and updates the clock display in the html

const myTimer = async (focustime, focusclock, t, c) => {
  const audio = new Audio(
    "../static/mixkit-female-microphone-countdown-341.wav"
  );
  let rounds = 3;
  for (let r = 1; r <= rounds; ++r) {
    btnDisable = true;
    let roundMessage = document.querySelector("#roundcount");
    let innert = t;
    // Alert the round on the page, wait 3 seconds and clear out the alert !
    roundMessage.innerHTML = `<h3>Ready for Round ${r}</h3>`;
    setTimeout(() => {}, 3000);
    setTimeout(() => {}, 1000);
    roundMessage.innerHTML = "";
    // for (let i = focustime - 1; i >= 0; --i) {
    //   let j = 59;
    //   if (!btnDisable) {
    //     break;
    //   }
    //   while (j % 60 >= 0) {
    //     if (!btnDisable) {
    //       break;
    //     }
    //     await new Promise((resolve, reject) => {
    //       // The padstart converts the seconds to XX double digit format with default pad value as '0'
    //       if (j == 10) {
    //         audio.play();
    //       }
    //       focusclock.innerHTML = `${String(i).padStart(2, "0")}:${String(j).padStart(
    //         2,
    //         "0"
    //       )}`;
    //       setTimeout(resolve, 1000);
    //       j = j - 1;
    //     });
    //   }
    // }
    countDown(focustime, focusclock, focusDone);
    focusDone();
    innert = innert - 1;
    while (innert >= 0) {
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
          if (j == 10) {
            audio.play();
          }
          c.innerHTML = `${String(innert).padStart(2, "0")}:${String(
            j
          ).padStart(2, "0")}`;
          setTimeout(resolve, 1000);
          j = j - 1;
        });
      }
      innert = innert - 1;
    }
    btnDisable = false;
    focusclock.innerHTML = "25:00"; // Need to add reset functionality
    c.innerHTML = "05:00";
    startButton.classList.add("btn-success");
    startButton.classList.remove("btn-danger");
    startButton.innerHTML = "Start";
  }
};

const countDown = async (time, clock, Handler) => {
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
        if (j == 10) {
          audio.play();
        }
        clock.innerHTML = `${String(i).padStart(2, "0")}:${String(j).padStart(
          2,
          "0"
        )}`;
        setTimeout(resolve, 1000);
        j = j - 1;
      });
    }
  }
};

startButton.addEventListener("click", () => {
  if (!this.btnDisable) {
    startTimer(() => {
      btnDisable = true;
      this.startButton.innerHTML = "Master reset";
      this.startButton.classList.add("btn-danger");
      this.startButton.classList.remove("btn-success");
      myTimer(
        this.focusMinutes,
        this.timerDisplay1,
        this.breakMinutes,
        this.timerDisplay2
      );
    });
  } else {
    resetTimer(() => {
      btnDisable = false;
      this.startButton.innerHTML = "Start";
      this.startButton.classList.add("btn-success");
      this.startButton.classList.remove("btn-danger");
      this.timerDisplay1.innerHTML = `25:00`;
      this.timerDisplay2.innerHTML = `05:00`;
    });
  }
});

// window.onload = MainLogic;
