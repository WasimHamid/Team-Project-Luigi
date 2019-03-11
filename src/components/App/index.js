import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuList from "../MenuList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [
        {
          name: "Margerita",
          quantity: 0,
          price: "£6",
          description: "Simply the best!"
        },
        {
          name: "Tandoori Hot",
          quantity: 0,
          price: "£8",
          description: "Karen recommends!"
        },
        {
          name: "Ham and Pineapple",
          quantity: 0,
          price: "£2",
          description: "If you're into that"
        },
        {
          name: "Veggie Supreme",
          quantity: 0,
          price: "£6",
          description: "Suitable for Vegetarians"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <MenuList />
      </div>
    );
  }
}

export default App;
