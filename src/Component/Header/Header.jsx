import "./Header.css";
import { Link } from "react-router-dom";
//import img
import logo from "../icon /logo.png";
import contactList from "../icon /contactList.png";
import addContact from "../icon /addContact.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerItem">
        <img src={logo} alt="logo" />
        <h1>Contact</h1>
      </div>
      <div>
        <Link className="link" to="/">
          <img src={contactList} alt="contactList" />
          Contact List
        </Link>
        <Link className="link" to="/new-contact">
          <img src={addContact} alt="addContact" />
          Add Contact
        </Link>
      </div>
      <div>
        <input type="search" placeholder="Search"></input>
      </div>
    </div>
  );
};
export default Header;
