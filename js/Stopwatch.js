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
      //this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }
  stop() {
    this.setState({
      running: false
    });
    //clearInterval(this.watch);
  }
  
  render() {

   console.log('STATE = ' + this.state.running);

    return (
      <div className="content">
        <div className="controls">
          <a className="button" href="#" onClick={this.start.bind(this)}>Start</a>
          <a className="button" href="#" onClick={this.stop.bind(this)}>Stop</a>
          <a className="button" href="#" >
            Reset
          </a>
          <a className="button" href="#">
          </a>
          <a className="button" href="#">
            Clean resoult
          </a>
        </div>
        <div className="stopwatch">{this.times.miliseconds} : {this.times.seconds} : {this.times.minutes}</div>
        <div><ol id="resoults" /></div>
        <LifeStages componentName="Stopwatch" />
      </div>
    );
  }
}

 Stopwatch.defaultProps = {
    miliseconds: 400,
    seconds: 320,
    minutes: 0
  }
  Stopwatch.propTypes = {
    miliseconds: React.PropTypes.number.isRequired,
    seconds: React.PropTypes.number.isRequired,
    minutes: React.PropTypes.number.isRequired,
  }

