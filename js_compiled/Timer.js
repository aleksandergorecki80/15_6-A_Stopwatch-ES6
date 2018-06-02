class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: 0
    };
    this.state = {
      running: false
    };
    this.miliseconds = this.props.miliseconds;
    this.seconds = this.props.seconds;
    this.minutes = this.props.minutes;
    this.namesDest = [1];
  }

  step() {
    this.setState(prevState => ({
      handler: prevState.seconds + 1
    }));
    this.miliseconds++;
    if (this.miliseconds >= 100) {
      this.seconds += 1;
      this.miliseconds = 0;
    }
    if (this.seconds >= 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    this.pad0(this.minutes);
    this.pad0(this.minutes);
    this.pad0(this.minutes);
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result;
    }
    return result;
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
    console.log('RESET');
    this.setState({
      handler: 0
    });
    this.miliseconds = this.props.miliseconds;
    this.seconds = this.props.seconds;
    this.minutes = this.props.minutes;
  }

  savedTime() {
    console.log('save0');
    let savedTime = `${this.pad0(this.minutes)} : ${this.pad0(this.seconds)} : ${this.pad0(this.miliseconds)}`;
    let result = savedTime.toString();
    this.namesDest = [...this.namesDest, result];
    console.log(this.namesDest);
  }

  render() {
    //console.log(this.state.running);
    console.log(this.namesDest);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          'div',
          { className: 'controls' },
          React.createElement(
            'a',
            { className: 'button', href: '#', onClick: this.start.bind(this) },
            'Start'
          ),
          React.createElement(
            'a',
            { className: 'button', href: '#', onClick: this.stop.bind(this) },
            'Stop'
          ),
          React.createElement(
            'a',
            { className: 'button', href: '#', onClick: this.reset.bind(this) },
            'Reset'
          ),
          React.createElement(
            'a',
            { className: 'button', href: '#', onClick: this.savedTime.bind(this) },
            'Save resoults'
          ),
          React.createElement(
            'a',
            { className: 'button', href: '#' },
            'Clean resoult'
          )
        ),
        React.createElement('ol', { id: 'resoults' })
      ),
      React.createElement(
        'p',
        null,
        ' state: ',
        this.state.seconds
      ),
      React.createElement(
        'p',
        null,
        this.pad0(this.minutes),
        ' : ',
        this.pad0(this.seconds),
        ' : ',
        this.pad0(this.miliseconds)
      ),
      React.createElement(
        'ol',
        null,
        React.createElement(
          'li',
          null,
          this.namesDest,
          'kki'
        )
      )
    );
  }
}

Timer.defaultProps = {
  miliseconds: 0,
  seconds: 0,
  minutes: 0
};
Timer.propTypes = {
  miliseconds: React.PropTypes.number.isRequired,
  seconds: React.PropTypes.number.isRequired,
  minutes: React.PropTypes.number.isRequired
};