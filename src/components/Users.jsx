import React, { Component } from "react";
import "../components/Users.css";

class Users extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      details: { firstName, lastName, city, state, Country },
    } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <ul style={{ listStyle: "none" }}>
          <li>
            <b>firstName:</b>
            <span>{firstName}</span>
          </li>
          <li>
            <b>lastName:</b>
            <span>{lastName}</span>
          </li>
          <li>
            <b>city:</b>
            <span>{city}</span>
          </li>
          <li>
            <b>state:</b>
            <span>{state}</span>
          </li>
          <li>
            <b>Country:</b>
            <span>{Country}</span>
          </li>
        </ul>
      </>
    );
  }
}

export default Users;
