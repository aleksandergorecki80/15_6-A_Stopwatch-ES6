class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      "div",
      null,
      "Seconds: ",
      this.state.seconds,
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
          React.createElement("a", { className: "button", href: "#", id: "saveResoult" }),
          React.createElement(
            "a",
            { className: "button", href: "#", id: "clearResoults" },
            "Clean resoult"
          )
        ),
        React.createElement("ol", { id: "resoults" }),
        React.createElement(LifeStages, { componentName: "App" })
      )
    );
  }
}