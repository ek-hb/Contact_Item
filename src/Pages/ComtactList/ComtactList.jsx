import "./ComtactList.css";
import ContactItem from "../../Component/ContactItem/ContactItem";
import ContactInfo from "../../Component/ContactInfo/ContactInfo";
const ComtactList = ({ stor }) => {
  return (
    <div className="wrapper">
      <div className="ContactList">
        <ContactItem stor={stor} />
      </div>
      <div className="ContactInfo">
        <ContactInfo stor={stor} />
      </div>
    </div>
  );
};
export default ComtactList;
