import React, { Component } from "react";
import "../components/Style.css";

export default class Day4 extends Component {
  state = { users: [] };
  getUsers = async () => {
    await fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ users: json.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getUsers();
    }, 1000 * 3);
  }

  render() {
    return (
      <>
        <h1>User Details</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Avatar</th>
          </tr>
          {this.state.users.length === 0 ? (
            <tr>No records found</tr>
          ) : (
            this.state.users.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.email}</td>
                  <td>{element.first_name}</td>
                  <td>{element.last_name}</td>
                  <td>
                    <img src={element.avatar} alt="" srcset="" />
                  </td>
                </tr>
              );
            })
          )}
        </table>
      </>
    );
  }
}
