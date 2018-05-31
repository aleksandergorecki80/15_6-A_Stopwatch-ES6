

class App extends React.Component {

  render() {

    return React.createElement(
      "div",
      { className: "stopwatch" },
      "kki",
      React.createElement(Stopwatch, {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      })
    );
  }
}