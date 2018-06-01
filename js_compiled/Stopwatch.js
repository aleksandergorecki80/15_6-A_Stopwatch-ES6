class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false
    };
    this.times = {
      miliseconds: this.props.miliseconds,
      seconds: this.props.seconds,
      minutes: this.props.minutes
    };
  }

  render() {

    // console.log(this.state.running + ' = STATE')

    return React.createElement(
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
        React.createElement("a", { className: "button", href: "#" }),
        React.createElement(
          "a",
          { className: "button", href: "#" },
          "Clean resoult"
        )
      ),
      React.createElement("div", { className: "stopwatch" }),
      React.createElement("ol", { id: "resoults" }),
      React.createElement(LifeStages, { componentName: "App" })
    );
  }
}

Stopwatch.defaultProps = {
  miliseconds: 400,
  seconds: 320,
  minutes: 0
};
Stopwatch.propTypes = {
  miliseconds: React.PropTypes.number.isRequired,
  seconds: React.PropTypes.number.isRequired,
  minutes: React.PropTypes.number.isRequired
};