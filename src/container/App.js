import React, { Component } from "react";
import Items from "../components/Items";
import AddItem from "../components/AddItem";
import "./App.css";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Stella McCartney Blazer",
        image:
          "https://cache.net-a-porter.com/images/products/1105309/1105309_in_l.jpg"
      },
      {
        id: 2,
        name: "Redone Levis",
        image:
          "https://cache.net-a-porter.com/images/products/1059091/1059091_in_l.jpg"
      },
      {
        id: 3,
        name: "Elizabeth and James Bag",
        image:
          "https://cache.net-a-porter.com/images/products/1123707/1123707_in_l.jpg"
      },
      {
        id: 4,
        name: "Allude Stripe Top",
        image:
          "https://cache.net-a-porter.com/images/products/1069656/1069656_in_l.jpg"
      },
      {
        id: 5,
        name: "The Row Sandals",
        image:
          "https://cache.net-a-porter.com/images/products/1058531/1058531_in_l.jpg"
      }
    ]
  };

  addItem = item => {
    item.id = Math.random();
    let items = [...this.state.items, item];
    this.setState({
      items: items
    });
  };

  deleteItem = id => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({
      items: items
    });
  };

  render() {
    return (
      <div className="App container">
        <h1>Mode</h1>
        <Items items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
        <footer>Made by me &hearts; </footer>
      </div>
    );
  }
}

export default App;

// Have a form that accepts an Input
// Display the result of that input
