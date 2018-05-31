class Test extends React.Component {
  constructor(props) {
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
      this.props.minutes,
      this.props.seconds,
      this.props.miliseconds
    );
  }
}

Test.propTypes = {
  minutes: React.PropTypes.number,
  seconds: React.PropTypes.number,
  miliseconds: React.PropTypes.number
};