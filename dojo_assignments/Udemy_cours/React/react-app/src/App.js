import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Pramila", age: 25 },
      { name: "shirish", age: 28 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I love games
        </Person>
      </div>
    );
  }
}

export default App;
