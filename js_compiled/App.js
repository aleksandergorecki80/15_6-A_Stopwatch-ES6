class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
      //format: 'kki'
    };
    console.log(constructor);
    console.log('constructor tutaj');
  }

  reset() {
    console.log('reset tutaj');
    this.setState({
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    });
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
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

  pad0(value) {
    console.log('pad0');
    let result = value.toString();
    if (result.length < 2) {
      result = "0" + result;
    }
    return result;
  }

  format() {
    console.log('format');
    return `${this.pad0(this.state.minutes)}:${this.pad0(this.state.seconds)}:${this.pad0(Math.floor(this.state.miliseconds))}`;
  }

  render() {
    const stopwatch = new App();
    console.log('render');
    return React.createElement(
      'div',
      { className: 'content' },
      React.createElement(
        'div',
        { className: 'controls' },
        React.createElement(
          'a',
          { className: 'button', href: '#' },
          'Start'
        ),
        React.createElement(
          'a',
          { className: 'button', href: '#', id: 'stop' },
          'Stop'
        ),
        React.createElement(
          'a',
          { className: 'button', href: '#', id: 'reset' },
          'Reset'
        ),
        React.createElement(
          'a',
          { className: 'button', href: '#', id: 'saveResoult' },
          'Save resoult'
        ),
        React.createElement(
          'a',
          { className: 'button', href: '#', id: 'clearResoults' },
          'Clean resoult'
        )
      ),
      React.createElement(
        'div',
        { className: 'stopwatch' },
        this.format()
      ),
      React.createElement('ol', { id: 'resoults' }),
      React.createElement(LifeStages, { componentName: 'App' })
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