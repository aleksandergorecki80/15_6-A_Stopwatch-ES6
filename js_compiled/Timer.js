class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: 0
    };
    this.state = {
      running: false
    };
    this.state = {
      results: 0
    };
    this.miliseconds = this.props.miliseconds;
    this.seconds = this.props.seconds;
    this.minutes = this.props.minutes;
    this.resoultsTable = this.props.resoultsTable;
  }

  step() {
    this.setState(prevState => ({
      handler: prevState.seconds + 1
    }));
    this.miliseconds++;
    if (this.miliseconds >= 100) {
      this.seconds += 1;
      this.miliseconds = 0;
    }
    if (this.seconds >= 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    this.pad0(this.minutes);
    this.pad0(this.minutes);
    this.pad0(this.minutes);
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result;
    }
    return result;
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
    this.miliseconds = this.props.miliseconds;
    this.seconds = this.props.seconds;
    this.minutes = this.props.minutes;
  }

  savedTime() {
    let savedTime = `${this.pad0(this.minutes)} : ${this.pad0(this.seconds)} : ${this.pad0(this.miliseconds)}`;
    let result = savedTime.toString();
    this.resoultsTable = [...this.resoultsTable, result];
    this.setState(prevState => ({
      resoults: prevState.results + 1
    }));
  }
  cleanResoults() {
    this.setState({
      results: 0
    });
    this.resoultsTable = [];
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
          { className: "btn btn-warning", href: "#", onClick: this.start.bind(this) },
          "Start"
        ),
        React.createElement(
          "a",
          { className: "btn btn-warning", href: "#", onClick: this.stop.bind(this) },
          "Stop"
        ),
        React.createElement(
          "a",
          { className: "btn btn-warning", href: "#", onClick: this.reset.bind(this) },
          "Reset"
        ),
        React.createElement(
          "a",
          { className: "btn btn-warning", href: "#", onClick: this.savedTime.bind(this) },
          "Save resoults"
        ),
        React.createElement(
          "a",
          { className: "btn btn-warning", href: "#", onClick: this.cleanResoults.bind(this) },
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

Timer.defaultProps = {
  miliseconds: 0,
  seconds: 0,
  minutes: 0,
  resoultsTable: []
};
Timer.propTypes = {
  miliseconds: React.PropTypes.number.isRequired,
  seconds: React.PropTypes.number.isRequired,
  minutes: React.PropTypes.number.isRequired,
  resoultsTable: React.PropTypes.array.isRequired
};