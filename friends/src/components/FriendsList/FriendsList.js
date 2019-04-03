import React from "react";
import axios from "axios";
import "./friendslist.css";

class FriendsList extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response.data);
        this.setState({ list: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="friends-list">
        {this.state.list.map(friend => (
          <div key={friend.id}>
            <h2>
              <strong>Name: </strong>
              {friend.name}
            </h2>
            <p>
              <strong>Age: </strong>
              {friend.age}
            </p>
            <p>
              <strong>Email: </strong>
              {friend.email}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
