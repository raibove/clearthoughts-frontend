import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    
  let navigate = useNavigate();
    return(
        <div className="home">
            <button className="home-button" onClick={()=>{
                navigate('../why')
            }}>Why</button>
            <button className="home-button"  onClick={()=>{
                navigate('../demo')
            }}>Demo</button>
            <button className="home-button"  onClick={()=>{
                navigate('../practice')
            }}>Practice</button>
        </div>
    )
}
export default Home;