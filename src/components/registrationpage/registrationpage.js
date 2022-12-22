


import { Button } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Home from "./home";
import './registrationpage.css';


export default function LoginRegistrationPage(){
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
   })

   const handleClickNewMember = () => {
        window.location.pathname = "/regpage"
    //localStorage.clear()
    //window.location.reload()
   }

   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("You must fill all fields")
    }
   }
    return(
        <div>
            {showHome ?
                <Home/>
                :
                <div className="container">
                        <div className="input_space">
                            <input placeholder="email" type='text' ref={email} className="loginInputs"/>
                        </div>
                        <div className="input_space">
                            <input placeholder="password" type='password' ref={password} className="loginInputs"/>
                        </div>
                        <div className="homePageBtnsContainer">
                            <div><button onClick={handleSignIn} className="homepageBtns"
                            >Log in</button>
                            <p >Not a member yet?</p>
                            <button onClick={handleClickNewMember} className="homepageBtns"
                            >Become a member</button></div>
                        </div>
                </div>
            }            
        </div>
    );
}

/* const handleSignInClick = () => {
        window.location.pathname = ""
   }
*/