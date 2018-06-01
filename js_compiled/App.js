

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Stopwatch, null),
            React.createElement(LifeStages, { componentName: "App" })
        );
    }
}