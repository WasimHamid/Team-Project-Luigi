import React from "react";
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
          description={order.description}
          image={order.image}
          addToBasket={() => props.addToBasket(idx)}
          onDelete={() => props.deleteAToDo(idx)}
        />
      ))}
    </ul>
  );
};

export default MenuList;
