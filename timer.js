function MainLogic() {
  var startButton = document.querySelector("#startbutton");
  var timerDisplay = document.querySelector("#clock");
  var minutes = 45;
  var btnDisable = false;

  // Function that triggers the count-down and updates the clock display in the html
  const myTimer = async (time, clock) => {
    for (let i = time; i >= 0; --i) {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
        // The padstart converts the seconds to XX double digit format with default pad value as '0'
        clock.innerHTML = `${String(i).padStart(2, "0")}:${String(i).padStart(
          2,
          "0"
        )}`;
      });
    }
    btnDisable = false;
    clock.innerHTML = "00:00"; // Need to add reset functionality
  };

  startButton.addEventListener("click", () => {
    if (!this.btnDisable) {
      this.btnDisable = true;
      myTimer(minutes, timerDisplay);
    }
  });
}

window.onload = MainLogic;
