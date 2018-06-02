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
    React.createElement("a", { className: "button", href: "#", id: "saveResoult" }),
    React.createElement(
      "a",
      { className: "button", href: "#", id: "clearResoults" },
      "Clean resoult"
    )
  ),
  React.createElement("ol", { id: "resoults" }),
  React.createElement(LifeStages, { componentName: "App" })
);