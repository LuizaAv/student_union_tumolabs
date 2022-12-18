


import React from "react";
import "./advicesupport.css"


const questions = [
    "What is the EU TUMO Convergence Center?",
    "Where will the center be located?",
    "Who will design the building?",
    "Is TUMO Labs a tuition-free program?",
    "Can I apply if I’m not 18?",
    "What are the requirements to apply?"
]

export default function Advicesupport(){

    return(
        <div className="faqContainer">
            <h2>FAQ</h2>
            {
                questions.map(item => {
                    return(
                        <div className="anFAQAnswercontainer">
                            <div className="questionContainer">
                                <span className="question">{item}</span>
                                <span className="showAnswer">Show answer</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}