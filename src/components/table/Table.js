import { useState } from "react"
import "./Table.css"

const Table = ({data})=>{
   const [defaultData, setDefaultData] = useState([{
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
}

   ])
    return(
        <div className="table">
            <table>
            <tr className="row-header">
                <th className="cell">Five I-messages:</th>
                <th className="cell">express</th>
                <th className="cell">Example</th>
            </tr>
            {data.map((message, index)=>(
                <tr className="row">
                    <th className="cell">{defaultData[index].message}</th>
                    <th className="cell">{defaultData[index].express}</th>
                    <th className="cell">{message.value}</th>
                </tr>
            ))}
            </table>
        </div>
    )
}

export default Table;