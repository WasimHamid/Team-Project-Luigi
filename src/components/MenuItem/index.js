import React, { Component } from "react";

const MenuItem = props => {
  return (
    <div>
      <div> {props.name} </div>

      <div>{props.price}</div>
      <img src={props.image} />
    </div>
  );
};

export default MenuItem;
