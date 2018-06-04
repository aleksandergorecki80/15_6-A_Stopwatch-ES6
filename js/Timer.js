class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      resoultsTable: []
    };
  }

  step() {
    this.setState(prevState => ({ miliseconds: prevState.miliseconds + 1 }));
    if (this.state.miliseconds >= 100) {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
      this.setState({ miliseconds: 0 });
    }
    if (this.state.seconds >= 60) {
      this.setState(prevState => ({ minutes: prevState.minutes + 1 }));
      this.setState({ seconds: 0 });
    }
  }

  start() {
    if (!this.state.running) {
      this.setState({
        running: true
      });
      this.interval = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.setState({
      running: false
    });
  }

  reset() {
    this.setState({
      handler: 0
    });
    this.setState({
      miliseconds: 0,
      seconds: 0,
      minutes: 0
    });
  }

  savedTime() {
    let result = `${pad0(this.state.minutes)} : ${pad0(
      this.state.seconds
    )} : ${pad0(this.state.miliseconds)}`;
    this.setState({
      resoultsTable: [...this.state.resoultsTable, result]
    });
    this.resoultsTable = [...this.state.resoultsTable, result];
  }
  cleanResoults() {
    this.setState({
      resoultsTable: []
    });
  }
  render() {
    const listElement = this.state.resoultsTable.map((time, key) => (
      <Display key={key + 1} time={time} />
    ));
    return (
      <div className="container">
        <div className="controls">
          <a
            className="btn btn-warning"
            href="#"
            onClick={this.start.bind(this)}
          >
            Start
          </a>
          <a
            className="btn btn-warning"
            href="#"
            onClick={this.stop.bind(this)}
          >
            Stop
          </a>
          <a
            className="btn btn-warning"
            href="#"
            onClick={this.reset.bind(this)}
          >
            Reset
          </a>
          <a
            className="btn btn-warning"
            href="#"
            onClick={this.savedTime.bind(this)}
          >
            Save resoults
          </a>
          <a
            className="btn btn-warning"
            href="#"
            onClick={this.cleanResoults.bind(this)}
          >
            Clean resoult
          </a>
        </div>
        <div className="text-center time">
          {pad0(this.state.minutes)}
          : {pad0(this.state.seconds)}
          : {pad0(this.state.miliseconds)}
        </div>
        <div className="text-center results-list">
          <ol className="list-group">{listElement}</ol>
        </div>
      </div>
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}
