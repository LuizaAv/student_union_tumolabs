


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

        if((repeatpassword.current.value === "") && (password.current.value === "")
        && (email.current.value === "") && (name.current.value === "")) {
            alert("All fields must be filled")
            window.current.reload()
        }

        if(!(password.current.value===repeatpassword.current.value)){
            alert("Passwords don't match")
            window.current.reload()
            }
            
        if(name.current.value&&email.current.value&&password.current.value&&repeatpassword.current.value)
            {
                localStorage.setItem("name",name.current.value)
                localStorage.setItem("email",email.current.value)
                localStorage.setItem("password",password.current.value)
                localStorage.setItem("signUp",email.current.value)
                localStorage.setItem("repeatpassword",repeatpassword.current.value)
                localStorage.setItem("motivationText", motivationText.current.value)
                alert("Account created successfully!!")
                window.location.reload()
                
            }
   }


    return(
        <div className="container">
            { showHome ? <Home/> :
                        <div>
                            <h2>Registration</h2>
                            <div className="input_space">
                                <input placeholder="Name" type='text' ref={name} className="regInputs"/>
                            </div>
                            <div className="input_space">
                                <input placeholder="Password" type='password' ref={password} className="regInputs"/>
                            </div>
                            <div className="input_space">
                                <input placeholder="Repeat password" type='password' ref={repeatpassword} className="regInputs"/>
                            </div>
                            <div className="input_space">
                                <input placeholder="Email" type='text' ref={email} className="regInputs"/>
                            </div>
                            <div className="input_space_motivation">
                                <input placeholder="describe your motivation at least 50 words" type='text' ref={motivationText} className="regInputs"/>
                            </div>
                            <div className="regBtnContainer">
                                <Button onClick={handleClick} className="regSignUpBtn"
                                style={{backgroundColor :"#D3D3D3", color: "#31333B"}}
                                >Sign Up</Button>
                            </div>
                        </div>
    }
                </div>
    )
}