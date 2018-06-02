class Stopwatch extends React.Component {
            constructor(props) {
            super(props);
                  this.state = { 
                    miliseconds: 0,
                    seconds: 0,
                    minutes: 0,
                };
            this.napis = 0;
          }

          step() {
              this.setState({
                miliseconds: this.state.miliseconds + 1 
              });
              this.napis++;
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

          componentDidMount() {
            this.interval = setInterval(() => this.step(), 1000);
          }

          componentWillUnmount() {
            clearInterval(this.interval);
          }

          render() {
            return (
              <div>

                      <div className="content">
                        <div className="controls">
                          <a className="button" href="#">Start</a>
                          <a className="button" href="#">Stop</a>
                          <a className="button" href="#">Reset</a>
                          <a className="button" href="#">saveResoult</a>
                          <a className="button" href="#">Clean resoult</a>
                        </div>
                        <div>{this.state.minutes} : {this.state.seconds} : {this.state.miliseconds}</div>
                        <div>{this.napis}</div>
                        <ol id="resoults" />
                        <LifeStages componentName="App" />
                      </div>
              </div>
            );
          }
}
