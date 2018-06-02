class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miliseconds: 0,
      seconds: 0,
      minutes: 0
    };
    this.napis = 0;
  }

  step() {
    this.setState({
      miliseconds: this.state.miliseconds + 1
    });
    this.napis++;
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

  componentDidMount() {
    this.interval = setInterval(() => this.step(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "content" },
        React.createElement(
          "div",
          { className: "controls" },
          React.createElement(
            "a",
            { className: "button", href: "#" },
            "Start"
          ),
          React.createElement(
            "a",
            { className: "button", href: "#" },
            "Stop"
          ),
          React.createElement(
            "a",
            { className: "button", href: "#" },
            "Reset"
          ),
          React.createElement(
            "a",
            { className: "button", href: "#" },
            "saveResoult"
          ),
          React.createElement(
            "a",
            { className: "button", href: "#" },
            "Clean resoult"
          )
        ),
        React.createElement(
          "div",
          null,
          this.state.minutes,
          " : ",
          this.state.seconds,
          " : ",
          this.state.miliseconds
        ),
        React.createElement(
          "div",
          null,
          this.napis
        ),
        React.createElement("ol", { id: "resoults" }),
        React.createElement(LifeStages, { componentName: "App" })
      )
    );
  }
}