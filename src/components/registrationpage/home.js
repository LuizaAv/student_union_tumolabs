



import { Button } from "@material-ui/core";
import React from "react";
import './registrationpage.css';
import loggedinAvatar from "../../icons/loggedInAvatar.png"

function Home(){

    const localQuestion=localStorage.getItem("question")
    const localEmail=localStorage.getItem("email")

    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.pathname = "/registrationpage"
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div className="homePageContainer">
            <h1>Home Page </h1>
            <div className="avatarAndNameContainer">
                <img src={loggedinAvatar} className="loggedInAvatar"/>
                <p>Welcome {localStorage.getItem('name')}</p>
            </div>
            <div className="questionsContainer">
                <h4>Questions I asked: </h4>
                <span>{localQuestion}</span>
            </div>
            <div className="emailContainer">
                <h4>Email: </h4>
                <span>{localEmail}</span>
            </div>
            <div className="loginDeleteBtnsContainer">
                <Button onClick={logout} className="logout"
                style={{backgroundColor :"#D3D3D3", color: "#31333B"}}
                >LogOut</Button>
                <Button onClick={deleteAccount} className="delete"
                style={{backgroundColor :"#D3D3D3", color: "#31333B", marginTop: "5%"}}
                >Delete</Button>
            </div>
        </div>
    );
}
export default Home;