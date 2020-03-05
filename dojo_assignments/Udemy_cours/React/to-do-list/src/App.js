import React, { Component } from "react";
import ListItems from "./component/ListItems";

import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  inputHandler = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };
  addItemHandler = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  };
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  };
  updateItemHandler = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do" onSubmit={this.addItemHandler}>
            <input
              type="text"
              placeholder="Enter a name"
              value={this.state.currentItem.text}
              onChange={this.inputHandler}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.updateItemHandler}
        ></ListItems>
      </div>
    );
  }
}

export default App;
