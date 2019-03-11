import React, { Component } from "react";

const MenuItem = props => {
  return (
    <div>
      <div> {props.name} </div>

      <div>{props.description}</div>
      <img src={props.image} />
    </div>
  );
};

export default MenuItem;
