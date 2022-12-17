



import React, {useState} from "react"
import LoginPage from "../loginpage/loginpage"
import "./userwelcome.css"

export default function Userwelcome(){
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const logOut = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
        setIsLoggedIn(false)
        window.location.pathname = "/loginpage"
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
        setIsLoggedIn(false)
        window.location.pathname = "/loginpage"
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

    return(
        <div>
            {!isLoggedIn ? <LoginPage /> :
            <div className="userHomePageContainer">
                Welcome 
                <button onClick={logOut}>Log Out</button>
                <button onClick={deleteAccount}>Delete Account</button>
            </div>
        }
        </div>
    )
}