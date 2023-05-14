import "./Header.css";
import { Link } from "react-router-dom";
//import img
// import logo from "./icon/logo.png";
// import contactList from "./icon/contactList.png";
// import addContact from "./icon/addContact.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerItem">
        <img
          src="https://cdn.icon-icons.com/icons2/2063/PNG/512/contact_book_contacts_notebook_icon_124667.png"
          alt="logo"
        />
        <h1>Contact</h1>
      </div>
      <div>
        <Link className="link" to="/">
          <img
            src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709735-application-contact-directory-phonebook-storage_108083.png"
            alt="contactList"
          />
          Contact Lis
        </Link>
        <Link className="link" to="/new-contact">
          <img
            src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709751-complaint-dissatisfaction-expression-feedback-report_108092.png"
            alt="addContact"
          />
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
