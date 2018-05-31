

class Stopwatch {

  constructor(display) {
    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.print();
  }

  print() {
    this.display.innerText = this.format(this.times);
  }
  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(
      Math.floor(times.miliseconds)
    )}`;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }
  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }
  saveResoult(times) {
    const resoults = document.getElementById("resoults");
    const time = document.createTextNode(this.format(times));

    const li = document.createElement("li");
    li.appendChild(time);
    resoults.appendChild(li);
  }
  clearResoults() {
    const list = document.getElementById("resoults");
    const childs = list.childNodes;
    const howMany = childs.length;
    for (let i = 0; i < howMany; i++) {
      list.removeChild(list.childNodes[0]);
    }
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

const stopwatch = new Stopwatch(document.querySelector(".stopwatch"));

let startButton = document.getElementById("start");
startButton.addEventListener("click", () => stopwatch.start());

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => stopwatch.stop());

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => stopwatch.reset());

let saveButton = document.getElementById("saveResoult");
saveButton.addEventListener("click", () =>
  stopwatch.saveResoult(stopwatch.times)
);


let clearResoultsButton = document.getElementById("clearResoults");
clearResoultsButton.addEventListener("click", () => 
  stopwatch.clearResoults());
