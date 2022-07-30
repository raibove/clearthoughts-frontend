import "./QuestionModal.css"

const QuestionModal = ({questions, index, setIndex})=>{

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
    return(
        <div>
            {
                questions.length !=0 &&
                <div className="practice">
                    <div>
                    <h2 className="question">{questions[index].title}</h2>
                    <p className="question-description">{questions[index].description}</p>
                    <input className="answer" placeholder="enter answer"/>
                    </div>
                    <div className="button-container">
                        {index!=0 && <button className="previous-question" onClick={previousIndex}>Back</button>}
                        <button className="next-question" onClick={nextIndex}>Next</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default QuestionModal;