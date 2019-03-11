import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(diff) {
    this.setState((state, props) => ({
      counter: state.counter + diff
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(1)}>+</button>
        <div>{this.state.counter}</div>
        <button onClick={() => this.handleClick(-1)}>-</button>
      </div>
    );
  }
}

export default Increment;
