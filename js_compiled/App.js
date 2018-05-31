class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "div",
        { className: "controls" },
        React.createElement(
          "a",
          { className: "button", href: "#", id: "start" },
          "Start"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "stop" },
          "Stop"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "reset" },
          "Reset"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "saveResoult" },
          "Save resoult"
        ),
        React.createElement(
          "a",
          { className: "button", href: "#", id: "clearResoults" },
          "Clean resoult"
        )
      ),
      React.createElement("div", { className: "stopwatch" }),
      React.createElement("ol", { id: "resoults" })
    );
  }
}