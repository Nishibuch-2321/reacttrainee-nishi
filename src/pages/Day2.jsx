import React, { Component } from "react";
import Users from "../components/Users";

class Day2 extends Component {
  state = {
    firstName: "Nishi",
    lastName: "Buch",
    city: "Bhuj",
    state: "Gujrat",
    Country: "India",
  };
  render() {
    return <Users details={this.state} title={"Employee Details"} />;
  }
}

export default Day2;
