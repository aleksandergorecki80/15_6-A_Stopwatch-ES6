class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      resoultsTable: []
    };
  }

  step() {
    this.setState(prevState => ({ miliseconds: prevState.miliseconds + 1 }));
    if (this.state.miliseconds >= 100) {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
      this.setState({ miliseconds: 0 });
    }
    if (this.state.seconds >= 60) {
      this.setState(prevState => ({ minutes: prevState.minutes + 1 }));
      this.setState({ seconds: 0 });
    }
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

  savedTime() {
    let result = `${pad0(this.state.minutes)} : ${pad0(this.state.seconds)} : ${pad0(this.state.miliseconds)}`;
    this.setState({
      resoultsTable: [...this.state.resoultsTable, result]
    });
  }

  cleanResoults() {
    this.setState({
      resoultsTable: []
    });
  }

  render() {
    const listElement = this.state.resoultsTable.map((time, key) => React.createElement(Display, { key: key, time: time }));
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
          "Save resoults"
        ),
        React.createElement(
          "a",
          {
            className: "btn btn-warning",
            href: "#",
            onClick: this.cleanResoults.bind(this)
          },
          "Clean resoult"
        )
      ),
      React.createElement(
        "div",
        { className: "text-center time" },
        pad0(this.state.minutes),
        ": ",
        pad0(this.state.seconds),
        ": ",
        pad0(this.state.miliseconds)
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