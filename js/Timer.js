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
   let {miliseconds, seconds, minutes} = this.state;
    miliseconds++;
    if (miliseconds >= 100) {
      seconds++;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes++ ;
      seconds = 0;
    }
    this.setState({
      miliseconds,
      seconds,
      minutes
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

  getFormattedTime (){
  return `${pad0(this.state.minutes)} : ${pad0(this.state.seconds)} : ${pad0(this.state.miliseconds)}`;
}

  savedTime() {
    const result = this.getFormattedTime();
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
            Clean results
          </a>
        </div>
        <div className="text-center time">
          {this.getFormattedTime()}
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




