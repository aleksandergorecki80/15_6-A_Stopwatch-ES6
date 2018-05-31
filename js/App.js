class App extends React.Component {
 constructor(props) {
  super(props);
    this.state = {
        running: false,
        minutes: 0,
        seconds: 0,
        miliseconds: 0
        //format: 'kki'
    }
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
    return `${this.pad0(this.state.minutes)}:${this.pad0(this.state.seconds)}:${this.pad0(
      Math.floor(this.state.miliseconds)
    )}`;
  }

 render() {
const stopwatch = new App();
console.log('render');
  return (
	<div className="content">
      <div className="controls">
        <a className="button" href="#" >Start</a> 
        <a className="button" href="#" id="stop">Stop</a> 
        <a className="button" href="#" id="reset">Reset</a> 
        <a className="button" href="#" id="saveResoult">Save resoult</a> 
        <a className="button" href="#" id="clearResoults">Clean resoult</a>
      </div>
            <div className="stopwatch">{this.format()}</div>
      <ol id="resoults"></ol>
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


