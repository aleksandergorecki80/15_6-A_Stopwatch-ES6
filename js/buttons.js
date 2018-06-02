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
          <a className="button" href="#" id="saveResoult">
          </a>
          <a className="button" href="#" id="clearResoults">
            Clean resoult
          </a>
        </div>
        <ol id="resoults" />
        <LifeStages componentName="App" />
      </div>