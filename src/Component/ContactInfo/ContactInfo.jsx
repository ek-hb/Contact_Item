import "./ContactInfo.css";
import { Link } from "react-router-dom";

//import img
import phone from "./icon/phoneInfo.png";
import email from "./icon/emailInfo.png";
import gender from "./icon/genderInfo.png";
import group from "./icon/groupInfo.png";
import favorite from "./icon/favoriteInfo.png";
import deleteContact from "./icon/deleteContact.png";
import editContact from "./icon/editContact.png";

const ContactInfo = ({ stor, onDeleteContact }) => {
  const handleDeleteContact = (id) => {
    onDeleteContact(id);
  };
  return (
    <div>
      {stor.map((contact) => (
        <div key={contact.id}>
          <div className="contactInfo">
            <div className="contactInfoOne">
              <ul>
                <li>
                  <img src={favorite} alt="favorite" />
                  {contact.name}
                </li>{" "}
              </ul>
              <h1>Avatar</h1>
            </div>
            <div className="contactInfoTwo">
              <ul>
                <li>
                  <img src={phone} alt="phone" />
                  Phone: {contact.phone}
                </li>
                <li>
                  <img src={email} alt="email" />
                  Email: {contact.email}
                </li>
                <li>
                  <img src={gender} alt="gender" />
                  Gender: {contact.gender}
                </li>
                <li>
                  <img src={group} alt="group" />
                  Group: {contact.group}
                </li>
              </ul>
              <div className="contactInfoTwoButton">
                <button onClick={() => handleDeleteContact(contact.id)}>
                  <img src={deleteContact} alt="deleteContact" />
                  Delete contact
                </button>
                <button>
                  <Link className="link" to="/update-contact">
                    <img src={editContact} alt="editContact" />
                    Edit contact{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
