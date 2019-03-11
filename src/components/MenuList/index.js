import React, { Component } from "react";
import MenuItem from "../MenuItem";

const MenuList = props => {
  return (
    <ul>
      {props.items.map((order, idx) => (
        <MenuItem
          key={idx}
          name={order.name}
          quantity={order.quantity}
          price={order.price}
          image={order.image}
        />
      ))}
    </ul>
  );
};

export default MenuList;
