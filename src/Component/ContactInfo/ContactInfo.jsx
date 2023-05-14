import "./ContactInfo.css";
import { Link } from "react-router-dom";

//import img
// import phone from "./icon/phoneInfo.png";
// import email from "./icon/emailInfo.png";
// import gender from "./icon/genderInfo.png";
// import group from "./icon/groupInfo.png";
// import favorite from "./icon/favoriteInfo.png";
// import deleteContact from "./icon/deleteContact.png";
// import editContact from "./icon/editContact.png";

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
                  {/* <img src={favorite} alt="favorite" /> */}
                  {contact.name}
                </li>{" "}
              </ul>
              <h1>Avatar</h1>
            </div>
            <div className="contactInfoTwo">
              <ul>
                <li>
                  <img
                    src="https://cdn.icon-icons.com/icons2/72/PNG/256/mobile_phone_14388.png"
                    alt="phone"
                  />
                  Phone: {contact.phone}
                </li>
                <li>
                  <img
                    src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png"
                    alt="email"
                  />
                  Email: {contact.email}
                </li>
                <li>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2122/PNG/512/gender_sex_icon_131294.png"
                    alt="gender"
                  />
                  Gender: {contact.gender}
                </li>
                <li>
                  <img
                    src="https://cdn.icon-icons.com/icons2/1150/PNG/512/1486504843-collaboration-group-people-men-user-team-users_81379.png"
                    alt="group"
                  />
                  Group: {contact.group}
                </li>
              </ul>
              <div className="contactInfoTwoButton">
                <button onClick={() => handleDeleteContact(contact.id)}>
                  <img
                    src="https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-trash-4341321_120557.png"
                    alt="deleteContact"
                  />
                  Delete contact
                </button>
                <button>
                  <Link className="link" to="/update-contact">
                    <img
                      src="https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-settings-4341324_120534.png"
                      alt="editContact"
                    />
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
