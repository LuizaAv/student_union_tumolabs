import "./navbar.css"
import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { ReactComponent as ReactLogo } from "../../icons/logo.svg";
import { FaUserGraduate } from 'react-icons/fa'

import {Link} from "react-router-dom"


export default function Navbar(){

    return(
        <Card className="navbarMainContainer" style={{backgroundColor: "#31333B"}}>
            <Link to="/" className="navbarLogo">
                <div className="logoContainer">
                    <ReactLogo id="navbarItem1"/>
                    <div><p>Student Union</p></div>
                </div>
            </Link>
            <div id="navbarItem2">
                    <CardContent>
                        <Typography>
                            <b><Link to="/aboutus" className="navbarPages">About Us</Link></b>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                            <b><Link to="/activities" className="navbarPages">Activities</Link></b>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                            <b><Link to="/advicesupport" className="navbarPages">Advice & Support</Link></b>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                            <b><Link to="/educationwork" className="navbarPages">Education & Work</Link></b>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                            <b><Link to="/newsevents" className="navbarPages">News & Events</Link></b>
                        </Typography>
                    </CardContent>
                    <CardContent className="userIconContainer">
                        <Typography className="iconContainer">
                            <Link to="/loginpage">
                                <FaUserGraduate className="userIcon"/>
                            </Link>
                        </Typography>
                    </CardContent>
           </div>
        </Card>
    )

}