import React, { Component } from "react";

class AddItem extends Component {
  state = {
    name: "",
    image: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
  };

  render() {
    return (
      <div className="items__form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="image">Image</label>
          <input type="text" id="image" onChange={this.handleChange} />
          <button className="waves-effect black btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddItem;

// Have a form that accepts an Input
// Display the result of that input
