class App extends React.Component {
  constructor(display) {
    super();
    this.running = false;
    // this.display = display;
    this.reset();
    // this.print(this.times);
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.print();
  }
  /*
  print() {
    this.display.innerText = this.format(this.times);
  }
  */
  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
  }
  start() {
    console.log('start');
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

  render() {
    const stopwatch = new Stopwatch('kki');

    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "div",
        { className: "controls" },
        React.createElement(
          "a",
          { className: "button", href: "#", onClick: stopwatch.start() },
          "Start"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "stop" },
          "Stop"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "reset" },
          "Reset"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "saveResoult" },
          "Save resoult"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "clearResoults" },
          "Clean resoult"
        )
      ),
      React.createElement(
        "div",
        { className: "stopwatch" },
        this.times
      ),
      React.createElement("ol", { id: "resoults" })
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}