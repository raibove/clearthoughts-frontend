import { useState } from "react"
import "./Table.css"
import history from "../answerModal/history.png"
import para from "../answerModal/para.png"
import home from "../answerModal/home.png"
import { useNavigate } from "react-router-dom"

const Table = ({data, setShowTable})=>{

    const navigate = useNavigate()

    const defaultData = [{
        message:"seeing, hearing.",
        express:" What are you seeing, hearing or otherwise sensing? (facts only)",
    },
    {
        message:"and feeling",
        express:"What emotions are you feeling? ",
    },
    {
        message:"because I",
        express:"What interpretations, wants, needs, memories or anticipations of yours support those feelings?",
    },
    {
        message:"and now I want",
        express:"What action, information or commitment do you want now? ",
    },
    {
        message:"so that",
        express:"What positive results will that action, information or commitment lead to in the future?",
    },
    {
        message:"so that",
        express:"What positive results will that action, information or commitment lead to in the future?",
    }]

    return(
        <div className="table">
            <table>
            <tr className="row-header">
                <th className="cell">Five I-messages:</th>
                <th className="cell">express</th>
                <th className="cell">Example</th>
            </tr>
            {data.map((message, index)=>(
                <>
                    {index !== data.length-1 &&
                        <tr className="row">
                            <th className="cell">{defaultData[index].message}</th>
                            <th className="cell">{defaultData[index].express}</th>
                            <th className="cell">{message.value}</th>
                        </tr>
                    }
                </>
            ))}
            </table>
            <div className="answer-buttons">
                <img src = {para} alt = "Table" className="go-table" onClick={()=>{setShowTable(false)}}/>
                <img src = {history} alt="History" className="go-history" onClick={()=>navigate('../')}/>
                <img src = {home} alt="Home" className="go-home" onClick={()=>navigate('../')}/>
            </div>
        </div>
    )
}

export default Table;