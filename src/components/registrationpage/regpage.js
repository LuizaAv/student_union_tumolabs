


import { Button } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Home from "./home";
import './registrationpage.css';
import "./regpage.css"




export default function Regpage(){
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const repeatpassword =useRef()
    const motivationText =useRef()

    const localSignUp=localStorage.getItem("signUp")

    const localMotivation = localStorage.getItem("motivationText")

    const [showHome,setShowHome]=useState(false)

    useEffect(()=>{
        if(localSignUp){
            setShowHome(true)
        }
        
    })

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    
    const handleClick=()=>{
        if(name.current.value&&email.current.value&&password.current.value&&repeatpassword.current.value){
                localStorage.setItem("name",name.current.value)
                localStorage.setItem("email",email.current.value)
                localStorage.setItem("password",password.current.value)
                localStorage.setItem("signUp",email.current.value)
                localStorage.setItem("repeatpassword",repeatpassword.current.value)
                localStorage.setItem("motivationText", motivationText.current.value) 

                if(password.current.value.length <= 8 || repeatpassword.current.value.length <= 8){
                    alert("Password must contain at least 8 characters")
                    localStorage.clear()
                    return
                }else if((repeatpassword.current.value === "") && (password.current.value === "")
                    && (email.current.value === "") && (name.current.value === "")) {
                        alert("All fields must be filled")
                        window.current.reload()
                }else if(!(password.current.value===repeatpassword.current.value)){
                    alert("Passwords don't match")
                    localStorage.clear()
                    window.current.reload()
                }
                }    
                
                alert("Account created successfully!!")
                window.location.reload()  
   }


    return(
        <div className="container">
            { showHome ? <Home/> :
                        <div>
                            <h2>Registration</h2>
                            <div className="input_space">
                                <input placeholder="name" type='text' ref={name} className="regInputs"/>
                            </div>
                            <div className="input_space">
                                <input placeholder="password" type='password' ref={password} className="regInputs"/>
                            </div>
                            <div className="input_space">
                                <input placeholder="repeat password" type='password' ref={repeatpassword} className="regInputs"/>
                            </div>
                            <div className="input_space">
                                <input placeholder="email" type='text' ref={email} className="regInputs"/>
                            </div>
                            <div className="input_space_motivation">
                                <input placeholder="describe your motivation at least 50 words" type='text' ref={motivationText} className="regInputs"/>
                            </div>
                            <div className="regBtnContainer">
                                <button onClick={handleClick} className="regSignUpBtn"
                                >Sign Up</button>
                            </div>
                        </div>
    }
                </div>
    )
}