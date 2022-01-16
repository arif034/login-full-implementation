import { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-div">
        <div>
          <Link className="navbar-link" to="/home">
            Home
          </Link>
        </div>
        <div>
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="navbar-link" to="/contacts">
            Contacts
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
