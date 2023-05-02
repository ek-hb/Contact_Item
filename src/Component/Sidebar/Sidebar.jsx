import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>Famely</li>
        <li>Friends</li>
        <li>Work</li>
        <li>Gym</li>
        <li>Favorte</li>
        <li>
          Archives
          <img
            src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643772-archive-archives-document-folder-open_113445.png"
            alt="Archives"
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
          alt="windows"
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1585/PNG/512/3709730-assistance-call-centre-help-service_108075.png"
          alt="nav"
        />
      </div>
    </div>
  );
};
export default Sidebar;
