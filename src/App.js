// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const userData = {};

    for (const [key, value] of formData.entries()) {
      userData[key] = value;
    }

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("User data submitted and stored in local storage.");
  };

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <h2 className="form-heading">User's Details</h2>
          <form id="myForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <br />
            <div className="form-group-rad">
              <label>Gender:</label>
              <br />
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
              />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
