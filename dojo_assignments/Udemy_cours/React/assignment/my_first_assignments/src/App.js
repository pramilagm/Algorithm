import React, { Component } from "react";
import "./App.css";
import UserOutput from "./User/UserOutput.js";
import UserInput from "./User/UserInput.js";

class App extends Component {
  state = {
    username: "Pramila"
  };
  usernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Hello</h2>
        <UserOutput name={this.state.username}></UserOutput>
        <UserInput
          changed={this.usernameHandler}
          name={this.state.username}
        ></UserInput>
      </div>
    );
  }
}

export default App;
