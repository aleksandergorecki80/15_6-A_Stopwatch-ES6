class Test extends React.Component {
  constructor(display) {
    super(props);
   // this.display = display,
    this.state = {
      running: false
    };
  }

 render() {
  
  return (
    <div className="stopwatch">kki

         {this.state.minutes}
          {this.this.seconds}
          {this.state.miliseconds}

    </div>

  );
 }
}

Test.propTypes = {
  minutes: React.PropTypes.number,
  seconds: React.PropTypes.number,
  miliseconds: React.PropTypes.number
};
