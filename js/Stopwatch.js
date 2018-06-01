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

  
  render() {

   // console.log(this.state.running + ' = STATE')

    return (
      <div className="content">
        <div className="controls">
          <a className="button" href="#">Start</a>
          <a className="button" href="#" >
            Stop
          </a>
          <a className="button" href="#" >
            Reset
          </a>
          <a className="button" href="#">
          </a>
          <a className="button" href="#">
            Clean resoult
          </a>
        </div>
        <div className="stopwatch"></div>
        <ol id="resoults" />
        <LifeStages componentName="App" />
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

