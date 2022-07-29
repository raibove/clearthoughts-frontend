import './Onboarding.css';
import React, {useState} from "react";
import axios from "axios";
import introVideo from "./intro.mp4"

function Onboarding({setIsOpen}) {
  const [journey, setJourney] = useState(0)
  const [username, setUsername] = useState(null)
  const [showError, setShowError] = useState(false)

  const submitUsername = async (e)=>{
    try{
      let response = await axios.post('https://clearthoughts.herokuapp.com/user', {name:username})
      console.log(response.data)
      localStorage.setItem('userId', response.data.id)
      localStorage.setItem('userName', response.data.name)
      setIsOpen(false)
    }catch(err){
      setShowError(true)
    }
  }

  return (
    <div className="Onboarding">
      <div className='content'>
        {
          journey==0 && 
          <h2>Welcome to clearThoughts</h2>
        }
        {
          journey ==1 && 
            <video className='video' controls >
            <source src={introVideo} type="video/mp4"/>
          </video>
        }{
          journey==2 && 
          <div>
            <h3>Enter username to get started</h3>
            <input placeholder='enter username' type="text" vale={username} onChange={(e)=>setUsername(e.target.value)} className='username' onKeyPress={(e)=>{if(e.code === "Enter" || e.code === "NumpadEnter") submitUsername(e)}}/>
          </div>
        }
      </div>
      <div>
        <button onClick={()=>{setJourney(journey+1)}} className='next'>Next</button>
      </div>
    </div>
  );
}

export default Onboarding;