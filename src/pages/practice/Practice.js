import { useEffect, useState } from "react";
import QuestionModal from "../../components/questionModal/QuestionModal";
import "./Practice.css"
import axios from "axios";

const Practice = ()=>{
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)

    const getQuestions = async ()=>{
        let response = await axios.get('http://localhost:5001/questions')
        setQuestions(response.data)
    }

    useEffect(()=>{
        getQuestions()
    },[])

    return(
        <div>
           <QuestionModal questions={questions} index={index} setIndex={setIndex}/>
        </div>
    )
}

export default Practice;