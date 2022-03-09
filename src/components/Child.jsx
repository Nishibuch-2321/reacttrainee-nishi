import React, { Component } from "react";
import "../components/Child.css";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: this.props.countValue,
    };
  }

  //it updates count state value
  static getDerivedStateFromProps(props, state) {
    if (props.countValue !== state.counts) {
      return { counts: props.countValue };
    }
    return null;
  }

  //it checks weather component should update or not
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.countValue === nextState.counts) {
      document.getElementById(
        "values"
      ).innerText = `next props is ${nextProps.countValue} and next state is ${nextState.counts}`;
      return true;
    } else {
      document.getElementById(
        "values"
      ).innerText = `component cannot update because props and state are different`;
      return false;
    }
  }

  //if component is updated then this method is called
  componentDidUpdate() {
    document.getElementById("update").innerText = `component is updated`;
  }

  render() {
    return (
      <>
        <div className="container">
          <button onClick={this.props.count}>click me</button>
          <h5> Updated state count is {this.state.counts}</h5>
          <div id="values" />
          <div id="update" />
        </div>
      </>
    );
  }
}
