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
              let result = value.toString();
              if (result.length < 2) {
              result = "0" + result;
              }
              return result;
            }
/*
            saveResoult(savedTime){
              let result =savedTime.toString()
              return result;
            }
*/
        test(){
          let savedTime = `${this.pad0(this.minutes)} : ${this.pad0(this.seconds)} : ${this.pad0(this.miliseconds)}`;
          let result =savedTime.toString()
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

        reset(){
          console.log('RESET');
          this.setState({
              handler: 0
            });
            this.miliseconds = this.props.miliseconds;
            this.seconds = this.props.seconds;
            this.minutes = this.props.minutes;
        }

          render() {
           console.log(this.state.running);
            return (
              <div>
      <div className="content">
        <div className="controls">
          <a className="button" href="#" onClick={this.start.bind(this)}>
            Start
          </a>
          <a className="button" href="#" onClick={this.stop.bind(this)}>
            Stop
          </a>
          <a className="button" href="#" onClick={this.reset.bind(this)}>
            Reset
          </a>
          <a className="button" href="#" id="saveResoult">Save resoults
          </a>
          <a className="button" href="#" id="clearResoults">
            Clean resoult
          </a>
        </div>
        <ol id="resoults" />
        
      </div>





               <p> state: {this.state.seconds}</p>
               
                <p>{this.pad0(this.minutes)} : {this.pad0(this.seconds)} : {this.pad0(this.miliseconds)}</p>
                <ol>
                  <li>{this.test()}kki</li>
                </ol>
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