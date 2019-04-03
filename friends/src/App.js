import React, { Component } from "react";
import "./app.css";
import FriendsList from "./components/FriendsList/FriendsList";
import FriendForm from "./components/FriendForm/FriendForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
