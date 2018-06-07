class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      resultsTable: []
    };
  }

  step() {
    let miliseconds = this.state.miliseconds;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;
    miliseconds++;
    if (miliseconds >= 100) {
      seconds++;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    this.setState({
      miliseconds: miliseconds,
      seconds: seconds,
      minutes: minutes
    });
  }

  start() {
    if (!this.state.running) {
      this.setState({
        running: true
      });
      this.interval = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.setState({
      running: false
    });
  }

  reset() {
    this.setState({
      miliseconds: 0,
      seconds: 0,
      minutes: 0
    });
  }

  getFormattedTime() {
    return `${pad0(this.state.minutes)} : ${pad0(this.state.seconds)} : ${pad0(this.state.miliseconds)}`;
  }

  savedTime() {
    const result = this.getFormattedTime();
    this.setState({
      resultsTable: [...this.state.resultsTable, result]
    });
  }

  cleanResults() {
    this.setState({
      resultsTable: []
    });
  }

  render() {
    const listElement = this.state.resultsTable.map((time, key) => React.createElement(Display, { key: key, time: time }));
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "controls" },
        React.createElement(
          "a",
          {
            className: "btn btn-warning",
            href: "#",
            onClick: this.start.bind(this)
          },
          "Start"
        ),
        React.createElement(
          "a",
          {
            className: "btn btn-warning",
            href: "#",
            onClick: this.stop.bind(this)
          },
          "Stop"
        ),
        React.createElement(
          "a",
          {
            className: "btn btn-warning",
            href: "#",
            onClick: this.reset.bind(this)
          },
          "Reset"
        ),
        React.createElement(
          "a",
          {
            className: "btn btn-warning",
            href: "#",
            onClick: this.savedTime.bind(this)
          },
          "Save results"
        ),
        React.createElement(
          "a",
          {
            className: "btn btn-warning",
            href: "#",
            onClick: this.cleanResults.bind(this)
          },
          "Clean results"
        )
      ),
      React.createElement(
        "div",
        { className: "text-center time" },
        this.getFormattedTime()
      ),
      React.createElement(
        "div",
        { className: "text-center results-list" },
        React.createElement(
          "ol",
          { className: "list-group" },
          listElement
        )
      )
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