class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false
    };
  }

  
  render() {
  //  console.log(display)
   // console.log(this.state.running + ' = STATE')
  // const div = document.querySelector(".stopwatch"); 
   //const stopwatch = new Stopwatch(document.querySelector(".stopwatch"));
  // console.log(stopwatch);
  // console.log(div);
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



