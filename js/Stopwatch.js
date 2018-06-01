class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false
    };
    this.times = {
      miliseconds: this.props.miliseconds,
      seconds: this.props.seconds,
      minutes: this.props.minutes
    }
  }

  start() {
    if (!this.state.running) {
    this.setState({
      running: true
    });
      this.watch = setInterval(() => this.step(), 1000);
      //this.watch = setInterval(() => alert('hello'), 5000);
    }
  }

  step() {
    if (!this.state.running) return;

    this.calculate();
    //this.print();
  }

  calculate() {
    console.log('jestem tu');
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
    console.log(this.times.seconds + ' : ' +  this.times.minutes + ' : ' + this.times.miliseconds);
  }

  stop() {
    this.setState({
      running: false
    });
    clearInterval(this.watch);
  }

  reset() {
    console.log('reset');
    
      this.times.minutes = 0;
      this.times.seconds = 0;
      this.times.miliseconds = 0;
    
      //console.log(this.times.minutes);
    }

  display() {
         return `${pad0(this.times.minutes)}:${pad0(this.times.seconds)}:${pad0(
      Math.floor(this.times.miliseconds)
    )}`;
    }
  
  render() {

    console.log(this.times.minutes + ' miinutes');


    

   console.log('STATE = ' + this.state.running);

    return (
      <div className="content">
        <div className="controls">
          <a className="button" href="#" onClick={this.start.bind(this)}>Start</a>
          <a className="button" href="#" onClick={this.stop.bind(this)}>Stop</a>
          <a className="button" href="#" onClick={this.reset.bind(this)}>Reset</a>
          <a className="button" href="#">
          </a>
          <a className="button" href="#">
            Clean resoult
          </a>
        </div>
          <div className="stopwatch">{this.display()}</div>
        <div><ol id="resoults" /></div>
        <LifeStages componentName="Stopwatch" />
      </div>
    );
  }
}

 Stopwatch.defaultProps = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0
  }
  Stopwatch.propTypes = {
    miliseconds: React.PropTypes.number.isRequired,
    seconds: React.PropTypes.number.isRequired,
    minutes: React.PropTypes.number.isRequired,
  }

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}