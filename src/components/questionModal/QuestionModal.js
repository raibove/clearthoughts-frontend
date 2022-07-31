import "./QuestionModal.css"
import { useState, useEffect } from "react"
import axios from "axios"
import AnswerModal from "../answerModal/AnswerModal"
import Table from "../table/Table"

const QuestionModal = ({questions, index, setIndex, answers, setAnswers})=>{

    const [showTable, setShowTable] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const nextIndex = ()=>{
        if(index<questions.length-1){
            setIndex(index+1)
        }
    }

    const previousIndex = ()=>{
        if(index!=0){
            setIndex(index-1)
        }
    }

    const updateAnswer = (e)=>{
        if(setAnswers!=undefined){
            let tempAnswers = answers
            tempAnswers[index].value = e.target.value
            setAnswers([...tempAnswers])
        }
    }

    const getIsLast = ()=>{
        if(index==questions.length-1)
            return true
        return false
    }

    const submit = async ()=>{
        try{
            if(setAnswers!==undefined){
                let data = {
                    userId: localStorage.getItem('userId'),
                    answer1: answers[0].value,
                    answer2: answers[1].value,
                    answer3: answers[2].value,
                    answer4: answers[3].value,
                    answer5: answers[4].value,
                    answer6: answers[5].value
                }
                let response = await axios.post("https://clearthoughts.herokuapp.com/answer", data)
                console.log(response)
                if(response){
                    setShowAnswer(true)
                }
            }else{
                setShowAnswer(true)
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            {
                questions.length !=0 &&
                <div className="practice">
                    {showAnswer===true? 
                        <>
                            {showTable === true ?
                                <Table data={answers} setShowTable={setShowTable}/>     
                                :
                                <AnswerModal answers={answers} setShowTable = {setShowTable} />
                            }
                        </>
                    :
                        <div>
                        <div>
                        <h2 className="question">{questions[index].title}</h2>
                        <p className="question-description">{questions[index].description}</p>
                        <textarea className="answer" placeholder="enter answer" value={answers[index].value} onChange={updateAnswer}/>
                        </div>
                        <div className="button-container">
                            { index!=0 && <button className="previous-question" onClick={previousIndex}>Back</button>}
                            { !getIsLast() && <button className="next-question" onClick={nextIndex}>Next</button>}
                            { getIsLast() && <button className="next-question" onClick={submit}>Submit</button>}
                        </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default QuestionModal;