import "./Home.css";
import { useNavigate } from "react-router-dom";
import why from "../../assets/why.png";
import sample from "../../assets/sample.png";
import practice from "../../assets/practice.png";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <button
        className="home-button"
        onClick={() => {
          navigate("../why");
        }}
      >
        {" "}
        <img src={why} className="button-image" alt="why" />{" "}
        <span>Why's & What</span>{" "}
      </button>
      <button
        className="home-button"
        onClick={() => {
          navigate("../demo");
        }}
      >
        {" "}
        <img src={sample} className="button-image" alt="sample" />{" "}
        <span>Sample</span>{" "}
      </button>
      <button
        className="home-button"
        onClick={() => {
          navigate("../practice");
        }}
      >
        {" "}
        <img src={practice} className="button-image" alt="practice" />{" "}
        <span>Practice</span>{" "}
      </button>
    </div>
  );
};

export default Home;
