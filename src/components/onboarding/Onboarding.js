import './Onboarding.css';
import React, {useState} from "react";
import axios from "axios";
import introVideo from "./intro.mp4"
import teddy from "../../assets/teddy.png"
import Loader from "../loader/Loader"

function Onboarding({setIsOpen}) {
  const [journey, setJourney] = useState(0)
  const [username, setUsername] = useState(null)
  const [showError, setShowError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitUsername = async ()=>{
    try{
      setLoading(true)
      let response = await axios.post('https://clearthoughts.herokuapp.com/user', {name:username})
      if(response.data){
        localStorage.setItem('userId', response.data.id)
        localStorage.setItem('userName', response.data.name)
        setLoading(false)
        setIsOpen(false)
      }
    }catch(err){
      setShowError(true)
      setLoading(false)
    }
  }

  return (
    <div className="Onboarding">
      <div className='content'>
        {
          journey==0 && 
          <>
            <h1 className='welcome'>Welcome to clearThoughts</h1>
            <img src={teddy} alt="teddy" className='teddy'/>
          </>
        }
        {
          journey ==1 && 
          <>
            <h2 className='welcome'>Let's watch a small intro video</h2>
            <video className='video' controls >
              <source src={introVideo} type="video/mp4"/>
            </video>
          </>
        }{
          journey==2 && 
          <div>
            {loading===true? <Loader/>:
            <>
              <h3>Enter username to get started</h3>
              <input placeholder='enter username' type="text" vale={username} onChange={(e)=>setUsername(e.target.value)} className='username-input' onKeyPress={(e)=>{if(e.code === "Enter" || e.code === "NumpadEnter") submitUsername()}}/>
              {showError && <p className='error-username'>Username already exist please enter different username</p>}
            </>}
          </div>
        }
      </div>
      <div>
        {
          journey!=2 && <button onClick={()=>{setJourney(journey+1)}} className='next'>Next</button>
        }
        {
          journey==2 && <button onClick={()=>{submitUsername()}} className='next' disabled={username==null || username==''}>Submit</button>
        }
      </div>
    </div>
  );
}

export default Onboarding;