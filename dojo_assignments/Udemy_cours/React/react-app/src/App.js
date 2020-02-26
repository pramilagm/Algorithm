import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
const App = props => {
  const [state, setState] = useState({
    persons: [
      { name: "Pramila", age: 25 },
      { name: "shirish", age: 28 }
    ]
  });
  const switnameHandler = () => {
    // console.log("was clicked");
    setState({
      persons: [
        { name: "Pramila Gharti Magar", age: 25 },
        { name: "shirish", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>This is really Working</p>
      <button onClick={switnameHandler}>click to see changes</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>
        I love games
      </Person>
    </div>
  );
};

export default App;
