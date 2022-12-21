


import React, { useRef, useState } from "react";
import "./advicesupport.css"



const data = [
    {
        question: "What is the EU TUMO Convergence Center?",
        answer: `Answer: The EU TUMO Convergence Center will be a hub for research, education, 
        and startups geared towards university students and young professionals. 
        The center will bring together partners, both local and international, to 
        bridge the gap between higher education and industry in Armenia.`
    },
    {
        question: "Where will the center be located?",  
        answer: `Answer: The center will be a 25,000-square-meter building in Yerevan, next to 
        TUMO. The facility will harbor  educational infrastructures, a STEM 
        research laboratory, as well as office and retail spaces.` 
    },
    {
        question: "Who will design the building?",
        answer:`Answer: The center is being implemented by the MVRDV studio of Dutch architect
        Winnie Maas. The project is currently in the planning stage.`
    },
    {
        question: "Is TUMO Labs a tuition-free program?",
        answer: `Answer: Yes. All of the programs offered at TUMO Labs are free-of-charge.`
    },
    {
        question: "Can I apply if I’m not 18?",
        answer: `Answer: Unfortunately, you cannot apply. The only prerequisite to study at 
        TUMO Labs is for participants to be 18+.`
    },
    {
        question:"What are the requirements to apply?",
        answer: `Answer: Anyone 18+ can apply to TUMO Labs. There are no prerequisites to the 
        guided self-learning program. To participate in the project-based 
        learning, you must have the required skills listed in each respective 
        project description.`
    }
]



export default function Advicesupport(){
    const [selected, setSelected] = useState(null)
    const typedText = useRef()

    const loggedInUser = localStorage.getItem("signUp")

    const handleSendClick = (e) => {
        localStorage.setItem("question", typedText.current.value)
        alert("We have successfully recieved your question. We will give an answer via email.")
        typedText.current.value = ""
    }

    const toggle = (index) => {
        if(selected === index){
            return setSelected(null)
        }
        const currentItem = document.getElementsByClassName("title")
        currentItem.style = ("marginBottom", "10%")
        setSelected(index)
    }
    
    return(
        <div className="faqContainer">
            <h2>FAQ</h2>
            <div className="toggleContainer">
                {
                    data.map((item, index) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(index) }>
                                <span >{item.question}</span>
                            </div>
                            <div className={selected === index ? "content_show" : "content"}>
                                {item.answer}
                            </div>
                        </div>
                    ))
                }
            </div>
                {
                    loggedInUser ?
                    <div className="questionTypeArea">
                        <h2>Write your question</h2>
                        <textarea placeholder="...type" ref = {typedText} type="text"></textarea>
                        <button onClick={(e) => handleSendClick(e)}>Send</button>
                    </div>  :
                    null
                }
        </div>
    )
}
