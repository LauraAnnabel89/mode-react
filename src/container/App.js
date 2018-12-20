import React, { Component } from 'react';
import Items from "../components/Items";
import AddItem from "../components/AddItem";
import './App.css';

class App extends Component {
  state = {items: [
    {
      id: 1,
      name: "Charlie",
      image: "http://fillmurray.com/100/100",

    },
    {
      id: 2,
      name: "Jeff",
      image: "http://fillmurray.com/150/150",
    }
  ]}

  addItem = (item) => {
    item.id = Math.random();
    let items = [...this.state.items, item];
    this.setState({
      items: items
    })
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({
      items:  items
    })
  }


  render() {
    return (
      <div className="App">
        <AddItem addItem={this.addItem}/>
        <Items items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;


// Have a form that accepts an Input
// Display the result of that input
