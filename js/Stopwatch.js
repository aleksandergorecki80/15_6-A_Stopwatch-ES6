class Stopwatch extends React.Component {
  constructor(display, props) {
    super(display, props);
    this.display = display,
   // this.set = this.setProps(),
    this.state = {
      running: false
    };
  }

  reset() {
    this.minutes = this.props.minutes;
    this.seconds = this.props.seconds;
    this.miliseconds = this.props.miliseconds;
    console.log(this.minutes + ' , ' + this.seconds + ' , ' + this.miliseconds);
  }

  start() {
    if (!this.state.running) {
      this.setState({
        running: true
      });
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    console.log("stop");
    this.setState({
      running: false
    });
    clearInterval(this.watch);
  }

  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }

  print() {
    this.display.innerText = this.format(this.times);
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result;
    }
    return result;
  }

  format() {
    return `${this.pad0(this.state.minutes)}:${this.pad0(
      this.state.seconds
    )}:${this.pad0(Math.floor(this.state.miliseconds))}`;
  }

  render() {
    console.log(this.state.running + "this.state.running");
    console.log(this.state.display + "display");
    const stopwatch = new Stopwatch(document.querySelector(".stopwatch"));
    return (
      <div className="content">
        <div className="controls">
          <a className="button" href="#" onClick={this.start.bind(this)}>
            Start
          </a>
          <a className="button" href="#" onClick={this.stop.bind(this)}>
            Stop
          </a>
          <a className="button" href="#" onClick={this.reset.bind(this)}>
            Reset
          </a>
          <a className="button" href="#" id="saveResoult">
            {this.props.seconds} props
          </a>
          <a className="button" href="#" id="clearResoults">
            Clean resoult
          </a>
        </div>
        <ol id="resoults" />
        <LifeStages componentName="App" />
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

Stopwatch.propTypes = {
  minutes: React.PropTypes.number,
  seconds: React.PropTypes.number,
  miliseconds: React.PropTypes.number
};
