


import { Button } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./home";
import './registrationpage.css';


export default function LoginRegistrationPage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const repeatpassword=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localRepeatPassword=localStorage.getItem("repeatpassword")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
        if(!(password.current.value===repeatpassword.current.value)){
        alert("Passwords don't match")
       }else if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        localStorage.setItem("repeatpassword",repeatpassword.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   //repeatpassword.current.value===repeatpassword&&password.current.value===repeatpassword.current.value

   const handleClickNewMember = () => {
    localStorage.clear()
    window.location.reload()
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
            {showHome?<Home/>:
            (show?
                <div className="container">
                        <h1>Logged In User {localName}</h1>
                        <h2>Login</h2>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} className="loginInputs"/>
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} className="loginInputs"/>
                        </div>
                        <div className="homePageBtnsContainer">
                            <Button onClick={handleSignIn} className="homepageBtns"
                            style={{backgroundColor :"#D3D3D3", color: "#31333B"}}
                            >Log in</Button>
                            <p >Not a member yet?</p>
                            <Button onClick={handleClickNewMember} className="homepageBtns"
                            style={{backgroundColor :"#D3D3D3", color: "#31333B"}}
                            >Become a member</Button>
                        </div>
                </div>
                :
                <div className="container">
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
                        <div className="regBtnContainer">
                            <Button onClick={handleClick} className="regSignUpBtn"
                            style={{backgroundColor :"#D3D3D3", color: "#31333B"}}
                            >Sign Up</Button>
                        </div>
                </div>)
            }
        </div>
    );
}

/* const handleSignInClick = () => {
        window.location.pathname = ""
   }
*/