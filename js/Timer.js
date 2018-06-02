 class Timer extends React.Component {
          constructor(props) {
            super(props);
            this.state = { 
              handler: 0 
            };
            this.miliseconds = this.props.miliseconds;
            this.seconds = this.props.seconds;
            this.minutes = this.props.minutes;
          }

          step() {
            this.setState(prevState => ({
              handler: prevState.seconds + 1
            }));
                this.miliseconds++
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
              console.log('pad0');
              let result = value.toString();
              if (result.length < 2) {
              result = "0" + result;
              }
              return result;
            }

          componentDidMount() {
            this.interval = setInterval(() => this.step(), 10);
          }

          componentWillUnmount() {
            clearInterval(this.interval);
          }

          render() {
            return (
              <div>
               <p> state: {this.state.seconds}</p>
               
                <p>{this.pad0(this.miliseconds)} : {this.pad0(this.seconds)} :  {this.minutes} </p>
              </div>
            );
          }
        }

 Timer.defaultProps = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0
  }
  Timer.propTypes = {
    miliseconds: React.PropTypes.number.isRequired,
    seconds: React.PropTypes.number.isRequired,
    minutes: React.PropTypes.number.isRequired,
  }