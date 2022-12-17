


import React, {useEffect, useRef, useState} from "react"
import { Link } from "react-router-dom"
import LoginPage from "../loginpage/loginpage"
import "./registrationpage.css"

export default function RegistrationPage(props){
    const name = useRef()
    const password = useRef()
    const passwordRepeat= useRef()
    const email = useRef()
    const text = useRef()

    const [show, setShow] = useState(false)

    const signuped = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    const localName = localStorage.getItem("name")
    const localPassword = localStorage.getItem("password")


    useEffect(() => {
        if(localEmail){
            setShow(true)
            console.log(show)
        }
    })
    
    const handleBtnClick = () => {
        if(name.current.value &&
            password.current.value &&
            passwordRepeat.current.value &&
            email.current.value &&
            text.current.value){
                localStorage.setItem("name", name.current.value)
                localStorage.setItem("password", password.current.value)
                localStorage.setItem("passwordRepeat", passwordRepeat.current.value)
                localStorage.setItem("email", email.current.value)
                localStorage.setItem("text", text.current.value)
                localStorage.setItem("signUp", email.current.value)
                window.location.reload()
                window.location.pathname = "/registrationpage/userhomepage"
                alert("You are successfully signed up")
            }
    }

    const handleClick = (e) => {
        e.preventDefault()
        if(email.current.value === localEmail && password.current.value === localPassword){
            localStorage.setItem("signUp", email.current.value)
            
        }else{
            alert("Please enter correct password")
        }
    }

    return(
        <div className="registrationPageContainer">
            {
                show ? <LoginPage btnClick={handleClick}/> :
                <div className="registrationForm">
            <h2>Become a Member</h2>
            <input placeholder="username" className="registrationFormInputs" type="text" 
            ref={name}
            name="username"
            />
            <input placeholder="create password" className="registrationFormInputs" type="password"
            ref={password}
            name="password"
            />
            <input placeholder="repeat password" className="registrationFormInputs" type="password"
            ref={passwordRepeat}
            name="repeatpassword"
            />
            <input placeholder="email" className="registrationFormInputs" type="email"
            ref={email}
            name="email"
            />
            <textarea placeholder="about you" className="regTextarea" type="text"
            ref={text}
            name="text"
            />
            <button className="regButton" onClick={handleBtnClick}>Create account</button>
        </div>

            }
            
        </div>
    )
}