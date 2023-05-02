import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="headerItem">
        <img
          src="https://cdn.icon-icons.com/icons2/3361/PNG/512/directory_call_telephone_phone_contacts_communication_contact_book_address_icon_210815.png"
          alt="Contact"
        />
        <h1>Contact</h1>
      </div>
      <div>
        <Link className="link" to="/">
          <img
            src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709735-application-contact-directory-phonebook-storage_108083.png"
            alt="contactlist"
          />
          Contact List
        </Link>
        <Link className="link" to="/new-contact">
          <img
            src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709746-customer-evaluation-review-satisfaction-system_108070.png"
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
