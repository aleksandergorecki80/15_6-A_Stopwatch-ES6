class Display extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "li",
        { className: "list-group-item" },
        this.props.time,
        " "
      )
    );
  }
}