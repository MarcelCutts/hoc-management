import React, { Component } from "react";
import "./App.css";
import RecomposeHOC from "./recompose";
import Powerplug from "./powerplug";
import PowerplugAdopt from "./powerplugadopt";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Made with RECOMPOSE</div>
        <RecomposeHOC />
        <hr />
        <div>Made with POWERPLUG</div>
        {Powerplug}
        <hr />
        <div>Made with POWERPLUG+ADOPT</div>
        <PowerplugAdopt />
      </div>
    );
  }
}

export default App;
