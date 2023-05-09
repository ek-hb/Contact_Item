import { click } from "@testing-library/user-event/dist/click";
import "./Sidebar.css";
//import img
import clock from "./icon/clock.png";
import window from "./icon/window.png";
import naw from "./icon/nav.png";
import archive from "./icon/archive.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>Famely</li>
        <li>Friends</li>
        <li>Work</li>
        <li>Gym</li>
        <li>Favorite</li>
        <li>
          Archives
          <img src={archive} alt="archive" />
        </li>
      </ul>
      <div>
        <img src={clock} alt="clock" />
        <img src={window} alt="window" />
        <img src={naw} alt="naw" />
      </div>
    </div>
  );
};
export default Sidebar;
