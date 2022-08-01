import Header from "../../components/header/Header";
import "./Why.css";
import fiveI from "../../assets/fiveI.png"

const Why = ()=>{
    return(
        <div>
            <Header />
            <div className="why-container">
                <h2 className="why-heading">What is clearThoughts?</h2>
                <p className="why-content">clearThoughts is a tool to help you improve the way you express your thoughts.</p>
            </div>
            <br/>
            <div className="why-container">
                <h2 className="why-heading">Why to use clearThoughts?</h2>
                <p className="why-content">People who express themselves well have the essential techniques 
                    necessary to get their point across well. clearThoughts make use of one of such 
                    technique to help you to transmit and receive information effectively.
                </p>
            </div>
            <br/>
            <div className="why-container">
                <h2 className="why-heading">What is five I-message?</h2>
                <p className="why-content">
                    There are different dimensions of experience that listener can use to recreate the 
                    experience in their mind. Five I-message make use of these dimensions and serve
                    as a method to help us to express ourself clearly and confidently in front of others
                </p>
            </div> 
            <br/>
            <div className="why-container">
                <h2 className="why-heading">What does five I-message contain?</h2>
                <p className="why-content">
                    Expressing emotions should be done using "I" statements as much as possible. 
                    This implies that you’re taking accountability for your emotions.
                    Five I-message contain similar pattern that will guide you to express your thought 
                    using I statements
                    <br/>
                    It contains the following data :-
                    <br/>
                    <br/>
                    <img src={fiveI} alt="seeing, hearing, feeling"/>
                </p>
            </div> 
            <br/>
            <div className="why-container">
                <h2 className="why-heading">Do we need to express ourself this carefully?</h2>
                <p className="why-content">
                    Expressing yourself this carefully might appear to take longer than your 
                    usual quick style of communication. But it helps in preventing misunderstanding, 
                    and helps to avoid ambiguity, conflict.
                </p>
            </div> 
            <br/>
            <div className="why-container">
                <h2 className="why-heading">Where can I find more such exercices?</h2>
                <p className="why-content">
                    More exercices can be found at <a href="https://newconversations.net/" target="_blank">
                    this</a> link.
                </p>
            </div>
        </div>
    )
}

export default Why;