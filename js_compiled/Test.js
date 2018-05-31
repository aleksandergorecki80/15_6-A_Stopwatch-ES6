class Test extends React.Component {
  constructor(display) {
    super(props);
    // this.display = display,
    this.state = {
      running: false
    };
  }

  render() {

    return React.createElement(
      "div",
      { className: "stopwatch" },
      "kki",
      this.state.minutes,
      this.this.seconds,
      this.state.miliseconds
    );
  }
}

Test.propTypes = {
  minutes: React.PropTypes.number,
  seconds: React.PropTypes.number,
  miliseconds: React.PropTypes.number
};