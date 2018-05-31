class Stopwatch extends React.Component {
  constructor(display, props) {
    super(display, props);
    this.display = display;
    this.state = {
      running: false
    };
    console.log(this.display + "display");
     this.print(display);
    this.reset();
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.print();
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
    console.log(' PRINT')
//   this.display.innerText = this.format(this.times);
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result;
    }
    return result;
  }

  format() {
    return `${this.pad0(this.minutes)}:${this.pad0(
      this.seconds
    )}:${this.pad0(Math.floor(this.miliseconds))}`;
  }

  render() {
console.log(this.minutes + ' minuty w render');
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
