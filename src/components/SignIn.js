import { Component } from "react";
import Navbar from "./Navbar.js";
class SignIn extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form className="sign-in-form">
          <input className="username" type="text" placeholder="username" />
          <input className="password" type="text" placeholder="password" />
          <button className="login-btn">Login</button>
        </form>
      </div>
    );
  }
}
export default SignIn;
