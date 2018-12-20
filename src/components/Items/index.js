import React, { Component } from 'react';

class Items extends Component {
  render() {
    const { items, deleteItem } = this.props;
    const itemsList = items.map(item => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <button onClick={() => deleteItem(item.id)}>Delete Item</button>
          </div>
        )
    })

    return (
        <div className="items__container--display">
          {itemsList}
        </div>
    );
  }
}

export default Items;


// Have a form that accepts an Input
// Display the result of that input
