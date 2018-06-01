class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false
    };
  }

  render() {
    //  console.log(display)
    // console.log(this.state.running + ' = STATE')
    // const div = document.querySelector(".stopwatch"); 
    //const stopwatch = new Stopwatch(document.querySelector(".stopwatch"));
    // console.log(stopwatch);
    // console.log(div);
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