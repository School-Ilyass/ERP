import "./style.css";

import icon from "../../assets/icons/userbg.svg";
import deleteUser from "../../assets/actions/deleteUser.svg";
import showUser from "../../assets/actions/show.svg";

// Define the props type for User
type UserProps = {
  name: string;
  onShowDetails: () => void;
  onDelete: () => void;
};

function User({ name, onShowDetails, onDelete }: UserProps) {
  return (
    <div className="user">
      <div className="UserProfile">
        <img src={icon} alt="User Profile" />
      </div>
      <div className="Name">
        <p>{name}</p>
      </div>
      <div className="Actions">
        <button onClick={onShowDetails} className="select">
          <img src={showUser} alt="Show Details" />
        </button>
        <button onClick={onDelete} className="delete">
          <img src={deleteUser} alt="Delete User" />
        </button>
      </div>
    </div>
  );
}

export default User;