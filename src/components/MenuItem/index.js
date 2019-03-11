import React, { Component } from "react";
import css from "./menuitem.module.css";
const MenuItem = props => {
  return (
    <div className="item-box">
      <div className="menu-item-name"> {props.name} </div>
      <div className="menu-item-price">{props.price}</div>
      <div className="menu-item-desc">{props.description}</div>
      <img className="item-image" src={props.image} alt="pictures of pizza" />
    </div>
  );
};

export default MenuItem;
