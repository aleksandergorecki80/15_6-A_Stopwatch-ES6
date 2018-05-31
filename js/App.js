class App extends React.Component {
 constructor() {
  super();

 }


 render() {


  return (
	<div className="content">
      <div className="controls">
        <a className="button" href="#" id="start">Start</a> 
        <a className="button" href="#" id="stop">Stop</a> 
        <a className="button" href="#" id="reset">Reset</a> 
        <a className="button" href="#" id="saveResoult">Save resoult</a> 
        <a className="button" href="#" id="clearResoults">Clean resoult</a>
      </div>
      <div className="stopwatch"></div>
      <ol id="resoults"></ol>
	</div>
  );
 }
}


