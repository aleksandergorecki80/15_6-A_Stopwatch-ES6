 class Timer extends React.Component {
          constructor(props) {
            super(props);



            this.state = { 
              handler: 0 
            };
            this.state = {
              running: false
            };
            this.state = {
              results: 0
            };
            this.miliseconds = this.props.miliseconds;
            this.seconds = this.props.seconds;
            this.minutes = this.props.minutes;
            this.resoultsTable = [];
            this.kki = 'jjk'
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
          this.setState({
              handler: 0
            });
            this.miliseconds = this.props.miliseconds;
            this.seconds = this.props.seconds;
            this.minutes = this.props.minutes;
        }

        savedTime(){
          let savedTime = `${this.pad0(this.minutes)} : ${this.pad0(this.seconds)} : ${this.pad0(this.miliseconds)}`;
          let result = savedTime.toString();
          this.resoultsTable = [...this.resoultsTable, result];
          this.setState(prevState => ({
              resoults: prevState.results + 1
            }));
        } 

          render() {
            console.log(this.resoultsTable);
/*
            let argume = ['raz', 'dwa', 'trzy'];
            function logAllArgumentsStary(argume) {
                //let lista=<h2> nam </h2>;
                let lista='';
                //let lista=<h2> nam </h2>;
           for (var i=0; i < argume.length; i++) {
                console.log(argume[i]);
               lista = (`${lista} 1 ${argume[i]}`);
               }
               return lista;
              }

*/


const numbers = ['kki', 'jjk', 3, 4, 5];
const doubled = numbers.map((number, key) => <li>{number}{key}</li>);
console.log(doubled);



            
  let  divCounters = (
    <div className="counters">
          biggg kki
    </div>
   );
  
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
          <a className="button" href="#" onClick={this.savedTime.bind(this)}>Save resoults
          </a>
          <a className="button" href="#">
            Clean resoult
          </a>
        </div>
        <ol id="resoults" />
        
      </div>
               <p> state: {this.state.seconds}</p>
               
                <p>{this.pad0(this.minutes)} : {this.pad0(this.seconds)} : {this.pad0(this.miliseconds)}</p>

                <ol> {doubled}</ol>
              {divCounters}
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