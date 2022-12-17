


import React from "react";
import "./shortabout.css";

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import boy from "../../icons/boyIcon.png";
import girl from "../../icons/girlIcon.jpg"

export default function Shortabout(){

    return(
        <div>
            <div className="shortaboutUsContainer">
                <h2>About Us</h2>
                <div>
                Who we are…

                We’re the TUMO Labs Student Union. We are here to provide you with a lot of volunteering opportunities, 
                part-time jobs, events, advice that you need to make your studying process at TUMO labs easier, and if 
                you want to make some lasting changes at TUMO Labs we can help you with that, too…As a student at TUMO
                Labs, you’ve got access to all the wonderful things we have to offer, it’s automatic, and we can help 
                you make the <Link to="/aboutus">Find more</Link>
                </div>
                <div className="membersOfUnion">
                    <div className="linesOfMembers">
                    <a href="https://www.linkedin.com/in/hrachali/" target="_blank">
                    <div className="aMemberOfUnion">
                        <img src={boy} title="Project Manager"/>
                    <b>Hrach</b>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/anahit-sayadyan/" target="_blank">
                    <div className="aMemberOfUnion">
                        <img src={girl} title="Project Manager"/>
                        <b>Anahit</b>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/maria-hambardzumyan-792388207/" target="_blank">
                    <div className="aMemberOfUnion">
                        <img src={girl} title="Project Manager"/>
                        <b>Maria</b>
                    </div>
                    </a>                        
                    </div>
                </div>
                <h4 className="becomeAMember">
                    <Link to="/registrationpage" className="becomeMemberLink">
                        <Button 
                        variant="contained" 
                        style={{backgroundColor: "#828387", color: "#FFFFFF"}}
                        target="_blank"
                        >
                        Become a Member</Button> 
                    </Link>
                </h4>
            </div>
        </div>
    )
}