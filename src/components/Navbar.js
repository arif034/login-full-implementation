import { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-div">
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contacts">Contacts</Link>
      </div>
    );
  }
}
export default Navbar;
