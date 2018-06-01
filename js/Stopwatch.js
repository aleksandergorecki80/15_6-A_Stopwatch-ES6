class Stopwatch extends React.Component {
            constructor(props) {
            super(props);
            this.state = { seconds: 0 };
          }

          tick() {
            this.setState(prevState => ({
              seconds: prevState.seconds + 1
            }));
          }

          componentDidMount() {
            this.interval = setInterval(() => this.tick(), 1000);
          }

          componentWillUnmount() {
            clearInterval(this.interval);
          }

          render() {
            return (
              <div>
                Seconds: {this.state.seconds}
                      <div className="content">
        <div className="controls">
          <a className="button" href="#">Start</a>
          <a className="button" href="#">
            Stop
          </a>
          <a className="button" href="#">
            Reset
          </a>
          <a className="button" href="#" id="saveResoult">
          </a>
          <a className="button" href="#" id="clearResoults">
            Clean resoult
          </a>
        </div>
        <ol id="resoults" />
        <LifeStages componentName="App" />
      </div>
              </div>
            );
          }
}
