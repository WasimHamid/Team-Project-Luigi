import React from "react";

const MenuItem = props => {
  return (
    <div>
      <div> {props.name} </div>
      <div>{props.price}</div>
      <div>{props.description}</div>
      <img src={props.image} alt="pictures of pizzas" />
      <button onClick={props.addToBasket}>Add Pizza to Basket</button>
    </div>
  );
};

export default MenuItem;
