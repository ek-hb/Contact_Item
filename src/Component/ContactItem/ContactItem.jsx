import "./ContactItem.css";

const ContactItem = ({ stor }) => {
  return (
    <div>
      {stor.map((contact) => (
        <div key={contact.id}>
          <div className="contactItem">
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactItem;
