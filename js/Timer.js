 class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        miliseconds: 0,
        seconds: 0,
        minutes: 0,

      };
    }

    step() {
      this.setState(prevState => ({
        seconds: prevState.miliseconds + 1
      }));
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
      this.setState(prevState => ({
        seconds: prevState.minutes + 1
      }));
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
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }