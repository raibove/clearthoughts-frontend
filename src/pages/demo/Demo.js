import { useState } from "react";
import Table from "../../components/table/Table";
import Header from "../../components/header/Header";

const Demo = ()=>{
    const [messages, setmessage] = useState([{
        message:"seeing, hearing.",
        express:" What are you seeing, hearing or otherwise sensing? (facts only)",
        content:"John, when I see you racing your wheelchair down the hall."
    },
    {
        message:"and feeling",
        express:"What emotions are you feeling? ",
        content:"I feel really upset."
    },
    {
        message:"because I",
        express:"What interpretations, wants, needs, memories or anticipations of yours support those feelings?",
        content:"because I imagine that you are going to hurt yourself and someone else, too"
    },
    {
        message:"and now I want",
        express:"What action, information or commitment do you want now? ",
        content:"so I want you to promise me right now that you will slow down"
    },
    {
        message:"so that",
        express:"What positive results will that action, information or commitment lead to in the future?",
        content:"so that you can get out of here in one piece and I can stop worrying about a collision"
    }
    ])

    return(
        <div>
            <Header/>
            <Table data={messages}/>
        </div>
    )
}

export default Demo;