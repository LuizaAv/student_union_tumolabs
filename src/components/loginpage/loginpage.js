


import React, {useState, useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import "./loginpage.css"
import RegistrationPage from "../registrationpage/registrationpage"

export default function LoginPage(props){
    const initialValue = {email: "", password: ""}
    const [loginValues, setLoginValues] = useState(initialValue)
    const [loginError, setLoginError] = useState({})
    const email = useRef()
    const password = useRef()

    const handleInputChange = (e) => {
        const {email, value} = e.target //destructuring
        setLoginValues({ ...loginValues, [email]: value})
    }   


    return(
        <div className="loginPageContainer">
            <form className="loginForm" onSubmit={(e) => props.btnClick}>
                <h2>Log In</h2>
                <input 
                placeholder="email" 
                className="loginFormInputs" 
                type="text" 
                name="email"
                ref={email}
                onChange={handleInputChange}
                />
                <p>{loginError.username}</p>
                <input 
                placeholder="password" 
                className="loginFormInputs" 
                type="password" 
                name="password"
                ref={password}
                onChange={handleInputChange}
                />
                <button className="loginButton" type="submit">Log in</button>
            </form>
            <Link to="/registrationpage" className="toRegistrationLink">Not a member yet?</Link>
            <Link to="/registrationpage">
                <button className="membershipButton">Become a member</button>
            </Link>
        </div>
    )
}