import "./NotFound.css";
//import img
import error from "./icon/error.png";

const NotFound = () => {
  return (
    <div className="NotFound">
      <img src={error} alt="error" />
      <h3>File not found</h3>
    </div>
  );
};
export default NotFound;
