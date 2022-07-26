import logo from "../../assets/clearthoughtsLogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="header">
      <img
        src={logo}
        className="logo"
        alt="logo"
        onClick={() => {
          navigate("../");
        }}
      />
      {localStorage.getItem("userName") && (
        <p className="username">{localStorage.getItem("userName")}</p>
      )}
    </div>
  );
};

export default Header;
