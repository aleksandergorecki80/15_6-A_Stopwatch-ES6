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
    this.resoultsTable = this.props.resoultsTable;;
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
    console.log(this.resoultsTable);
    const listElement = this.resoultsTable.map((number, key) => React.createElement(
      "li",
      null,
      React.createElement(
        "span",
        null,
        "Score no. ",
        key,
        ":"
      ),
      " ",
      number
    ));

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
            { className: "button", href: "#", onClick: this.reset.bind(this) },
            "Reset"
          ),
          React.createElement(
            "a",
            { className: "button", href: "#", onClick: this.savedTime.bind(this) },
            "Save resoults"
          ),
          React.createElement(
            "a",
            { className: "button", href: "#", onClick: this.cleanResoults.bind(this) },
            "Clean resoult"
          )
        ),
        React.createElement("ol", { id: "resoults" })
      ),
      React.createElement(
        "p",
        null,
        " state: ",
        this.state.seconds
      ),
      React.createElement(
        "p",
        null,
        this.pad0(this.minutes),
        " : ",
        this.pad0(this.seconds),
        " : ",
        this.pad0(this.miliseconds)
      ),
      React.createElement(
        "ul",
        null,
        " ",
        listElement
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