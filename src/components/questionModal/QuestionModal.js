import "./QuestionModal.css"
import { useState, useEffect } from "react"

const QuestionModal = ({questions, index, setIndex, answers, setAnswers})=>{
   

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
        let tempAnswers = answers
        tempAnswers[index].value = e.target.value
        setAnswers([...tempAnswers])
    }

    const getIsLast = ()=>{
        if(index==questions.length-1)
            return true
        return false
    }

    const submit = ()=>{
        console.log(answers)
    }

    return(
        <div>
            {
                questions.length !=0 &&
                <div className="practice">
                    <div>
                    <h2 className="question">{questions[index].title}</h2>
                    <p className="question-description">{questions[index].description}</p>
                    <input className="answer" placeholder="enter answer" value={answers[index].value} onChange={updateAnswer}/>
                    </div>
                    <div className="button-container">
                        { index!=0 && <button className="previous-question" onClick={previousIndex}>Back</button>}
                        { !getIsLast() && <button className="next-question" onClick={nextIndex}>Next</button>}
                        { getIsLast() && <button className="next-question" onClick={submit}>Submit</button>}
                    </div>
                </div>
            }
        </div>
    )
}

export default QuestionModal;