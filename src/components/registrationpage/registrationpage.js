


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
            {showHome?<Home/>:
            
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
            }            
        </div>
    );
}

/* const handleSignInClick = () => {
        window.location.pathname = ""
   }
*/