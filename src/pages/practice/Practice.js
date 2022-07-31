import { useEffect, useState } from "react";
import QuestionModal from "../../components/questionModal/QuestionModal";
import "./Practice.css"
import axios from "axios";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loading";
import Footer from "../../components/footer/Footer";

const Practice = ()=>{
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [answers, setAnswers] = useState([{value:""}
    ,{value:""},{value:""},{value:""},{value:""},{value:""}
    ])
    const [loading, setLoading] = useState(true)

    const getQuestions = async ()=>{
        let response = await axios.get('https://clearthoughts.herokuapp.com/question')
        setQuestions(response.data)
        if(response.data){
            setLoading(false)
        }
    }

    useEffect(()=>{
        getQuestions()
    },[])

    return(
        <div>
            <Header/>
            {
                loading===true? <div><Loader/></div>:
                <QuestionModal questions={questions} index={index} setIndex={setIndex} answers={answers} setAnswers={setAnswers}/>
           }
           <Footer />
        </div>
    )
}

export default Practice;