import React, { Component } from "react";
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
          description: "Simply the best!",
          image: "/images/PizzaMargherita.jpg"
        },
        {
          name: "Tandoori Hot",
          quantity: 0,
          price: "£8",
          description: "Karen recommends!",
          image: "/images/tandooripizza.jpg"
        },
        {
          name: "Ham and Pineapple",
          quantity: 0,
          price: "£2",
          description: "If you're into that",
          image: "/images/khampineapple.png"
        },
        {
          name: "Veggie Supreme",
          quantity: 0,
          price: "£6",
          description: "Suitable for Vegetarians",
          image: "/images/food-hero-newveggie.png"
        }
      ]
    };
  }

  // want a function to change the quantity of that specific pizza to 1
  addToBasket = index => {
    const addPizza = this.state.pizzas[index];
    this.setState(state => ({
      pizzas: [
        ...state.pizzas.slice(0, index),
        { ...addPizza, quantity: 1 },
        ...state.pizzas.slice(index + 1)
      ]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <MenuList items={this.state.pizzas} addToBasket={this.addToBasket} />
      </div>
    );
  }
}

export default App;
