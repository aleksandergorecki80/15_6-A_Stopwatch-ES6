class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      resultsTable: []
    };
  }

  step() {
    let miliseconds = this.state.miliseconds;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    miliseconds++;
    if (miliseconds >= 100) {
      seconds ++;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes ++ ;
      seconds = 0;
    }

    this.setState({
      miliseconds: miliseconds,
      seconds: seconds,
      minutes: minutes
    });
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
      miliseconds: 0,
      seconds: 0,
      minutes: 0
    });
  }

  savedTime() {
    const result = getFormattedTime (this.state.minutes, this.state.seconds, this.state.miliseconds);
    this.setState({
      resultsTable: [...this.state.resultsTable, result]
    });
  }

  cleanResults() {
    this.setState({
      resultsTable: []
    });
  }

  render() {
    const listElement = this.state.resultsTable.map((time, key) => (
      <Display key={key} time={time} />
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
            Save results
          </a>
          <a
            className="btn btn-warning"
            href="#"
            onClick={this.cleanResults.bind(this)}
          >
            Clean resoult
          </a>
        </div>
        <div className="text-center time">
          {getFormattedTime (this.state.minutes, this.state.seconds, this.state.miliseconds)}
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

function getFormattedTime (minutes, seconds, miliseconds){
  return `${pad0(minutes)} : ${pad0(seconds)} : ${pad0(miliseconds)}`;
}

