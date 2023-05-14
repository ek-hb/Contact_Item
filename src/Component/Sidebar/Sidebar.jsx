import { click } from "@testing-library/user-event/dist/click";
import "./Sidebar.css";
//import img
import clock from "./icon/clock.png";
import window from "./icon/window.png";
import naw from "./icon/nav.png";
import archive from "./icon/archive.png";

const Sidebar = ({ stor }) => {
  const statusContact = {
    All: 0,
    Famely: 0,
    Friends: 0,
    Work: 0,
    Gym: 0,
    Favorite: 0,
  };
  //Додавання кількості контактів до групи
  stor.forEach((contact) => {
    statusContact[contact.group] += 1;
  });
  //Сумма контактів всіх групп
  const allContact = stor.length;

  return (
    <div className="Sidebar">
      <ul>
        <li>
          All <span>{allContact}</span>
        </li>
        <li>
          Famely <span>{statusContact.Famely}</span>
        </li>
        <li>
          Friends <span>{statusContact.Friends}</span>
        </li>
        <li>
          Work<span>{statusContact.Work}</span>
        </li>
        <li>
          Gym <span>{statusContact.Gym}</span>
        </li>
        <li>
          Favorite <span>{statusContact.Favorite}</span>
        </li>
        <li>
          Archives
          <img
            src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643772-archive-archives-document-folder-open_113445.png"
            alt="archive"
          />
        </li>
      </ul>
      <div>
        <img
          src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709755-always-hours-service-support-time_108071.png"
          alt="clock"
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709742-board-forum-information-text-web_108094.png"
          alt="window"
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709730-assistance-call-centre-help-service_108075.png"
          alt="naw"
        />
      </div>
    </div>
  );
};
export default Sidebar;
