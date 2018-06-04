class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      results: 0,
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      resoultsTable: []
    };
  }

  step() {
    this.setState({ handler: 0 });

    this.setState(prevState => ({ miliseconds: prevState.counter + 1 }));

    if (this.state.miliseconds >= 100) {
      this.setState(prevState => ({ seconds: prevState.counter + 1 }));
      this.setState({ miliseconds: 0 });
    }
    if (this.state.seconds >= 60) {
      this.setState(prevState => ({ minutes: prevState.counter + 1 }));
      this.setState({ seconds: 0 });
    }

    this.setState({
      miliseconds: pad0(this.state.miliseconds),
      seconds: pad0(this.state.seconds),
      minutes: pad0(this.state.minutes)
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
      handler: 0
    });
    this.setState({
      miliseconds: 0,
      seconds: 0,
      minutes: 0
    });
  }

  savedTime() {
    let savedTime = `${pad0(this.minutes)} : ${pad0(this.seconds)} : ${pad0(this.miliseconds)}`;
    let result = savedTime.toString();
    this.resoultsTable = [...this.resoultsTable, result];
    this.setState(prevState => ({
      resoults: prevState.results + 1
    }));
  }
  cleanResoults() {
    this.setState({
      results: 0,
      resoultsTable: []
    });
  }
  render() {
    const listElement = this.resoultsTable.map((time, key) => React.createElement(Display, { key: key + 1, time: time }));
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
        this.pad0(this.minutes),
        ": ",
        this.pad0(this.seconds),
        ": ",
        this.pad0(this.miliseconds)
      ),
      React.createElement(
        "div",
        { className: "text-center" },
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