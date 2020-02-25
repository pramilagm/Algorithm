import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working</p>
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
