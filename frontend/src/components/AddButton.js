import { Link } from "react-router-dom";
import addUrl from "../assets/add.png";

const AddButton = () => {
  return (
    <Link to="/notes/new" className="floating-button">
      <img src={addUrl} alt="create new note" className="add-button" />
    </Link>
  );
};

export default AddButton;
