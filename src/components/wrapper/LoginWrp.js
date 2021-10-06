import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Alert } from "reactstrap";
import './user-login.css';
//import PersonIcon from "@material-ui/icons/Person";

export default class LoginWrp extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    // const token = localStorage.getItem("token");

    // let loggedIn = true;
    // if (token === null) {
    //   loggedIn = false;
    // }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "event" && password === "eventor@123") {
      localStorage.setItem("token", "dfklheiofdskfjanfhesoifsdnifbkb");
      this.setState({
        loggedIn: true,
      });
    } else{
        alert("Please Enter The Correct Details!");
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/main" />;
    }
    return (
      <div className="row">
        {/* <div class="box glowing"> */}
        <div className="col-sm-3 col-center login-wrapper">
          {/* <h1>Login</h1> */}
          {/* <PersonIcon />  */}
          <form onSubmit={this.submitForm}>
            <h3>Admin Login</h3>
            <input
              type="text"
              placeholder="ID required"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <br />
            <input
              type="password"
              placeholder="Password required"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <br />
            <button className="button" type="submit">Login</button>
          </form>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
