import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Pramila", age: 25 },
      { name: "shirish", age: 28 }
    ],
    showPersons: false
  };
  switnameHandler = newName => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Shirish", age: 27 }
      ]
    });
  };
  namechangeHandler = event => {
    this.setState({
      persons: [
        { name: "pramila", age: 25 },
        { name: event.target.value, age: 20 },
        { name: "Shirish", age: 27 }
      ]
    });
  };
  togglepersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  render() {
    const style = {
      backgroundColor: "orange",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working</p>
        <button style={style} onClick={this.togglepersonHandler}>
          click to see changes
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              onClick={this.switnameHandler.bind(this, "Pramila Gharti")}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switnameHandler.bind(this, "Shirish Shrestha")}
              changed={this.namechangeHandler}
            >
              I love games
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
