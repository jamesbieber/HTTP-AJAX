import React from "react";
import "./friendform.css";

class FriendForm extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form action="">
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name..."
          onChange={this.inputChangeHandler}
        />
        <input
          type="text"
          name="age"
          value={this.state.age}
          placeholder="Age..."
          onChange={this.inputChangeHandler}
        />
        <input
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.inputChangeHandler}
        />
        <button>Add Friend!</button>
      </form>
    );
  }
}

export default FriendForm;
