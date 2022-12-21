


import React from "react";
import "./shortabout.css";

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import p1 from "../../icons/people-01.png";
import p2 from "../../icons/people-08.png";
import p3 from "../../icons/people-07.png";

export default function Shortabout(){

    const aMember = localStorage.getItem("signUp")

    return(
        <div>
            <div className="shortaboutUsContainer"><h2><Link to = "/activities" className="h22">About Us</Link></h2>
                <div>
                Who we are…<br/>
                We’re the TUMO Labs Student Union. We are here to provide you with a lot of volunteering opportunities, 
                part-time jobs, events, advice that you need to make your studying process at TUMO labs easier, and if 
                you want to make some lasting changes at TUMO Labs we can help you with that, too…As a student at TUMO
                Labs, you’ve got access to all the wonderful things we have to offer, it’s automatic, and we can help 
                you make the <Link to="/aboutus">Find more</Link>
                </div>
                <div className="membersOfUnion">
                    <div className="linesOfMembers">
                    <div className="aMemberOfUnion">
                        <img src={p1} title="Head of Union"/>
                        <b>Karen Harutyunyan</b>
                        <p>Head of Union</p>
                    </div>
                    <div className="aMemberOfUnion">
                        <img src={p2} title="Vice president of Union"/>
                        <b>Narine Petrosyan</b>
                        <p>Vice president of Union</p>
                    </div>
                    <div className="aMemberOfUnion">
                        <img src={p3} title="Assistant"/>
                        <b>Yana Karapetyan</b>
                        <p>Assistant</p>
                    </div>                    
                    </div>
                </div>
                <h4>
                    {
                        !aMember ?

                        <Link to="/registrationpage" className="becomeMemberLink">
                            <div className="becomeMemberButton">
                            <button className="becomeAMember">Become a Member</button> 
                            </div>
                        </Link>
                        : 
                        null
                    }
                </h4>
            </div>
        </div>
    )
}