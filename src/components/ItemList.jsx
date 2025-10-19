import React, { Component } from "react";

class ItemList extends Component {
  render() {
    const items = ["Cat", "Ferret", "Dog", "Duck", "Bunny"];

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
