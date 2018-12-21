import React, { Component } from "react";
import "./items.css";

class Items extends Component {
  render() {
    const { items, deleteItem } = this.props;
    const itemsList = items.map(item => {
      return (
        <div className="item-container col s4" key={item.id}>
          <img className="item-image" src={item.image} alt={item.name} />
          <button
            className="item-delete-button btn-floating top right btn-small waves-effect waves-light black"
            onClick={() => deleteItem(item.id)}
          >
            X
          </button>
          <p className="item-title">{item.name}</p>
        </div>
      );
    });

    return <div className="items__container--display row">{itemsList}</div>;
  }
}

export default Items;

// Have a form that accepts an Input
// Display the result of that input
