import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Logout.scss";
import Authentication from "../Utils/Authentication"

class Logout extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    Authentication.clearToken();
    this.props.history.push("/login");
  }

  render() {
      return (
        <button className="logout-button" onClick={this.onLogout}>Logout</button>
      );
  }
}

export default withRouter(Logout);