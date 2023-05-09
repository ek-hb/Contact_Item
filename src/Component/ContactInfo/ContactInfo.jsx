import "./ContactInfo.css";

const ContactInfo = ({ stor }) => {
  return (
    <div>
      {stor.map((contact) => (
        <div key={contact.id}>
          <div className="contactInfo">
            <ul>
              <li>{contact.name}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.gender}</li>
              <li>{contact.group}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
