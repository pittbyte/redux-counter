import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}

//Add the mapStateToProps function//

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
