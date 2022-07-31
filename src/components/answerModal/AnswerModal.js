import { useState, useEffect } from "react"
import history from "./history.png"
import table from "./table.png"
import home from "./home.png"
import "./AnswerModal.css"
import { useNavigate } from "react-router-dom"

const AnswerModal = ({answers, setShowTable})=>{

    let navigate = useNavigate()
    // position:"absolute", top:0, bottom:0
    return(
        <div>
            <div>
                <h2 className="question">Before using five I-message</h2>
                <p className="question-description">{answers[0].value}</p>
                <h2 className="question">After using five I-message</h2>
                <p>{`${answers[1].value} ${answers[2].value} ${answers[3].value} ${answers[4].value} ${answers[5].value} `}</p>
            </div>
            <div className="answer-buttons">
                <img src = {table} alt = "Table" className="go-table" onClick={()=>setShowTable(true)}/>
                <img src = {history} alt="History" className="go-history" onClick={()=>navigate('../')}/>
                <img src = {home} alt="Home" className="go-home" onClick={()=>navigate('../')}/>
            </div>
        </div>
    )
}

export default AnswerModal;