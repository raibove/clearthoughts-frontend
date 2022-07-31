import { useState, useEffect } from "react"
import history from "./history.png"
import home from "./home.png"
import "./AnswerModal.css"
import { useNavigate } from "react-router-dom"

const AnswerModal = ({answers})=>{
    let navigate = useNavigate()
    return(
        <div  style={{position:"absolute", top:0, bottom:0}}>
            <div>
            <h2 className="question">Before using 5-I message</h2>
            <p className="question-description">{answers[0].value}</p>
            <h2 className="question">After using 5-I message</h2>
            </div>
            <div className="button-container">
                <img src ={home} alt="Home" className="go-home" onClick={()=>navigate('../')}/>
                {/* <button className="previous-question" >Back</button> */}
                <img src ={history} alt="History" className="go-history" onClick={()=>navigate('../')}/>
            </div>
        </div>
    )
}

export default AnswerModal;