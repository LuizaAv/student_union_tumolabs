import { Button } from "@material-ui/core";
import React, {useEffect} from "react";
import './home.css';
import loggedinAvatar from "../../icons/people-03.png"

function Home(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const localQuestion=localStorage.getItem("question")
    const localEmail=localStorage.getItem("email")

    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.pathname = "/loginpage"
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
        window.scrollTo(0, 0)
    }
    
    return(
        <div className="homePageContainer">
            
            <div className="avatarAndNameContainer">
                <img src={loggedinAvatar} className="loggedInAvatar"/>
                <p>Welcome to TumoLabs Student Union<br/> Dear {localStorage.getItem('name')}</p>
            </div>
            <div className="questionsContainer">
                <h4>Questions I asked: </h4>
                <span>{localQuestion}</span>
            </div>
            
            <div className="loginDeleteBtnsContainer">
                <button onClick={logout} className="logout"
                >LogOut</button>
                <button onClick={deleteAccount} className="delete"
                >Delete</button>
            </div>
        </div>
    );
}
export default Home;