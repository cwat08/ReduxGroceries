import React from "react";

const GroceryItem = ({ onClick, bought, string }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: bought ? "line-through" : "none"
    }}>
    {string}
  </li>
);

export default GroceryItem;
