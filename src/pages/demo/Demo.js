import { useState } from "react";
import Header from "../../components/header/Header";
import book from "../../assets/book.png";
import "./Demo.css";
import Loader from "../../components/loader/Loader";
import axios from "axios";
import QuestionModal from "../../components/questionModal/QuestionModal";
import Footer from "../../components/footer/Footer";

const Demo = ()=>{
    const answers = [{
        value:"Stop that racing!!"
    },{
        value:"John, when I see you racing your wheelchair down the hall."
    },
    {
        value:"I feel really upset."
    },
    {
        value:"because I imagine that you are going to hurt yourself and someone else, too"
    },
    {
        value:"so I want you to promise me right now that you will slow down"
    },
    {
        value:"so that you can get out of here in one piece and I can stop worrying about a collision"
    }]

    const [showInstruction, setShowInstruction] = useState(true);
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    

    const getQuestions = async ()=>{
        let response = await axios.get('https://clearthoughts.onrender.com/question')
        setQuestions(response.data)
        if(response.data){
            setLoading(false)
        }
    }


    const handleNext = ()=>{
        setShowInstruction(false)
        setLoading(true)
        getQuestions()
    }
    return(
        <div>
            <Header/>
            {showInstruction===true?
                <div className="Onboarding">
                    <div className='content'>
                        <img src={book} alt="book" className="book"/>
                        <h2 className="demo-instruction">In this demo we will re-write the "Stop that racing!" message shown in video using five I-message. The inputs are pre-filled according to the video for better understanding. 
                            <br/>
                            <br/>
                            Click on Next to continue.
                        </h2>
                        <button className="next-question" onClick={()=>{handleNext()}}>Next</button>
                        </div>
                </div>
                :
                <div>
                    {loading === true?
                        <div><Loader/></div>
                        :
                        <QuestionModal questions={questions} index={index} setIndex={setIndex} answers={answers} />
                    }   
                </div>
            }
            <Footer />
        </div>
    )
}

export default Demo;