import React, { Component } from "react";

class MyClass extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = (event) => {
    // const tempValue = event.target;
    // console.log("Hendle Increment", event);
    // setTimeout(() => {
    //   console.log(tempValue);
    // }, 1000);
    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step,
      };
    });
  };

  handleDecrement = (event) => {
    // console.log("Hendle Decrement", event.target);
    // console.log(this.props);
    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step,
      };
    });
  };

  render() {
    const { step } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>World</h1>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <span style={{ fontSize: "30px" }}>{this.state.value}</span>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default MyClass;
