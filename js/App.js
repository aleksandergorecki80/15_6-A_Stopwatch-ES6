

class App extends React.Component {
   constructor() {
  super();
   this.state = {
     minutes: 0,
     seconds: 0, 
     miliseconds: 0
  };
}

 render() {
  return (
    <div className="stopwatch">kki
         <Stopwatch 
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          miliseconds={this.state.miliseconds}
         />
    </div>

  );
 }
}




