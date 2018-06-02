class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Timer, null)
    );
  }
}