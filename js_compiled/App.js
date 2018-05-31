class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
      //format: 'kki'
    };
  }

  reset() {
    console.log("reset");
    this.setState({
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    });
  }
  start() {
    if (!this.state.running) {
      this.setState({
        running: true
      });
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    console.log("stop");
    this.setState({
      running: false
    });
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

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result;
    }
    return result;
  }

  format() {
    return `${this.pad0(this.state.minutes)}:${this.pad0(this.state.seconds)}:${this.pad0(Math.floor(this.state.miliseconds))}`;
  }

  render() {
    console.log(this.state.running + 'this.state.running');
    const stopwatch = new App();
    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "div",
        { className: "controls" },
        React.createElement(
          "a",
          { className: "button", href: "#", onClick: this.start.bind(this) },
          "Start"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", onClick: this.stop.bind(this) },
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
        "'",
        this.format(),
        "'"
      ),
      React.createElement("ol", { id: "resoults" }),
      React.createElement(LifeStages, { componentName: "App" })
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