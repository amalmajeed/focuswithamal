const events = require("events");
const util = require("util");

const emitter = new events.EventEmitter();

emitter.on("focusDone", (focusDoneHandler) => {
  util.log("You are done with focus ! now entering breakmode");
  focusDoneHandler();
});
emitter.on("breakDone", (breakDoneHandler) => {
  util.log("You are done with break ! now entering focusmode");
  breakDoneHandler();
});
emitter.on("startTimer", (timerBeginHandler) => {
  util.log("You have begun the Pomodoro process !");
  timerBeginHandler();
});
emitter.on("resetTimer", (timerStopHandler) => {
  util.log("You are terminating the Pomodoro process !");
  timerStopHandler();
});

// Send the event when timer is to start
const startTimer = (timerBeginHandler) => {
  emitter.emit("startTimer", timerBeginHandler);
};

// Send the event when timer is to reset
const resetTimer = (timerStopHandler) => {
  emitter.emit("resetTimer", timerStopHandler);
};

// Send the event when focus is done with the callback for triggering the break timer
const focusDone = (focusDoneHandler) => {
  emitter.emit("focusDone", focusDoneHandler);
};

// Send the event when break is done with the callback for triggering the break timer
const breakDone = (breakDoneHandler) => {
  emitter.emit("breakDone", breakDoneHandler);
};

module.exports = {
  startTimer,
  resetTimer,
  focusDone,
  breakDone,
};
