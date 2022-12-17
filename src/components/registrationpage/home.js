



import { Button } from "@material-ui/core";
import React from "react";
import './registrationpage.css';

function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
            <h1>Home Page </h1>
            <p>Welcome {localStorage.getItem('name')}</p>
            <div className="loginDeleteBtnsContainer">
                <Button onClick={logout} className="logout"
                style={{backgroundColor :"#D3D3D3", color: "#31333B"}}
                >LogOut</Button>
                <Button onClick={deleteAccount} className="delete"
                style={{backgroundColor :"#D3D3D3", color: "#31333B"}}
                >Delete</Button>
            </div>
        </div>
    );
}
export default Home;