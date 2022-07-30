import "./Home.css";
import { useNavigate } from "react-router-dom";
import why from "./why.png"
import sample from "./sample.png"
import practice from "./practice.png"

const Home = ()=>{
    
  let navigate = useNavigate();
    return(
        <div className="home">
            <button className="home-button" onClick={()=>{
                navigate('../why')
            }}> <img src={why} className='button-image'/> <span>The Why's</span>  </button>
            <button className="home-button"  onClick={()=>{
                navigate('../demo')
            }}> <img src={sample} className='button-image'/> <span>Sample</span> </button>
            <button className="home-button"  onClick={()=>{
                navigate('../practice')
            }}> <img src={practice} className='button-image'/> <span>Practice</span> </button>
        </div>
    )
}
export default Home;