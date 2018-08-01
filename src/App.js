import React, { Component } from "react";
import RecomposeHOC from "./Recompose";
import Powerplug from "./Powerplug";
import PowerplugAdopt from "./PowerplugAdopt";

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
