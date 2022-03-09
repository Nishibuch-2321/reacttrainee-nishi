import React from "react";
import Child from "../components/Child";

export default class Day3 extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      currentTime: new Date().toISOString(),
      intervalId: 1000,
    };
  }

  //method will be called while we want to increase count from child component
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //it will update time in state after rendering
  componentDidMount() {
    let intervalId = setInterval(() => {
      this.setState({ currentTime: new Date().toISOString() });
      document.getElementById(
        "compMount"
      ).innerText = `current time is ${this.state.currentTime}`;
    }, 1000);
    this.setState({ intervalId: intervalId });
  }

  //it will clear interval while unmounting component
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <>
        <Child count={this.incrementCount} countValue={this.state.count} />
        <div id="compMount" />
      </>
    );
  }
}
