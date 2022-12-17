


import React from "react";
import "./aboutus.css";
import boy from "../../icons/boyIcon.png";
import girl from "../../icons/girlIcon.jpg";

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AboutUsText from "./aboutustext";


export default function Aboutus(){


    return(
        <div className="aboutusMain">
            <h2 >About Us</h2>
            <AboutUsText />
            <div className="membersOfUnion">
                        <h2>People</h2>
                        <div className="linesOfMembers">
                            <a href="https://www.linkedin.com/in/hrachali/" target="_blank">
                            <div className="aMemberOfUnion">
                                <img src={boy} title="Head of Union"/>
                            <b>Karen Harutyunyan</b>
                            <p>Head of Union</p>
                            </div>
                            </a>
                            <a href="https://www.linkedin.com/in/hrachali/" target="_blank">
                            <div className="aMemberOfUnion">
                                <img src={girl} title="Vice president of Union"/>
                            <b>Narine Petrosyan</b>
                            <p>Vice president of Union</p>
                            </div>
                            </a>
                            <a href="https://www.linkedin.com/in/hrachali/" target="_blank">
                            <div className="aMemberOfUnion">
                                <img src={girl} title="Project manager"/>
                            <b>Yana Karapetyan</b>
                            <p>Project manager</p>
                            </div>
                            </a>
                        </div>
                        <div className="linesOfMembers">
                            <a href="https://www.linkedin.com/in/hrachali/" target="_blank">
                            <div className="aMemberOfUnion">
                                <img src={boy} title="Project Manager"/>
                               <b>Hrach</b>
                               <p>Project Manager</p>
                            </div>
                            </a>
                            <a href="https://www.linkedin.com/in/anahit-sayadyan/" target="_blank">
                            <div className="aMemberOfUnion">
                                <img src={girl} title="Project Manager"/>
                                <b>Anahit</b>
                                <p>Project Manager</p>
                            </div>
                            </a>
                            <a href="https://www.linkedin.com/in/maria-hambardzumyan-792388207/" target="_blank">
                            <div className="aMemberOfUnion">
                                <img src={girl} title="Project Manager"/>
                                <b>Maria</b>
                                <p>Project Manager</p>
                            </div>
                            </a>
                        </div>
                </div>
            <h2 className="departmentsH2">Departments</h2>
            <div className="departments">
                <div className="departmentsItem">
                    <h4>Education</h4>
                    <div>
                    Education department represent students’
                     academic interests to TumoLabs and 
                     beyond. Department aim to challenge 
                     the TumoLabs on the increasing 
                     marketisation of our education and its 
                     consequences for our academic experience. 
                     Advocate for education to be democratic, 
                     liberated, and accessible at its core. 
                     To achieve this, departments work with 
                     students and staff to come together to 
                     collectively demand.
                    </div>
                </div>
                <div className="departmentsItem">
                    <h4>Culture</h4>
                    <div>
                    They oversee thriving, talented and 
                    dedicated arts societies and develops 
                    opportunities for students to get 
                    involved in the culture at TumoLabs. 
                    In addition, they develop the Culture 
                    community within the Union and make 
                    sure that Culture societies are as 
                    inclusive and engaging as possible.
                    </div>
                </div>
                <div className="departmentsItem">
                    <h4>Sport</h4>
                    <div>
                    Organize all-school sports activities, 
                    and advocate a good game style to help 
                    the teachers and students of the whole 
                    school to activate their body and mind, 
                    enhance their physical fitness and strengthen 
                    unity.  Responsibility for maintaining 
                    discipline, order, and responsibility 
                    for arbitration and logistics in all 
                    major sports activities in the hospital. 
                    Understand the opinions, suggestions and 
                    requirements of the students on the teaching 
                    of physical education, and actively reflect 
                    the relevant superiors. Responsible for 
                    the regular work of the basketball team 
                    and football team. Guide the sports 
                    department of each department to carry 
                    out the work.
                    </div>
                </div>
            </div>
            <Link to="/registrationpage" className="becomeMemberLink">
                <Button 
                variant="contained" 
                style={{backgroundColor: "#828387", color: "#FFFFFF"}}
                target="_blank"
                >
                Become a Member</Button> 
            </Link>
        </div>
    )
}