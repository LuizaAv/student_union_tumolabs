import React from "react"
import "./shortactivities.css"

import chess from "../../icons/chess.JPG";
import cinema from "../../icons/cinema.jpg";
import { Link } from "react-router-dom";

export default function Shortactivities(){

    return(
        <div className="activitiesShortContainer">
            <h2 className="shortActivitiesH2"><Link to = "/activities" className="h22">Activities</Link></h2>
            <div className="shortActivitiesItem">
                <img src={chess} className="activitiesImg"/>
                <div className="shortAcitivitiesPart">
                    <h3><a>Chess Club</a></h3>
                    <span>It doesn't matter if you are a beginner, a club level player or even a GM, if you want to play chess, you are in the right place! Be ready for lessons, casual games and tournaments.</span>
                </div>
            </div>
            <div className="shortActivitiesItem">
                <img src={cinema} className="activitiesImg"/>
                <div className="shortAcitivitiesPart">
                    <h3><a>Film Society</a></h3>
                    <span>We are the Film Society. Free weekly events, including screenings, film discussions and maybe something else if we feel like it. A friendly and welcoming atmosphere. All films are voted on by members from a curated and varied selection. Film Society may be the place for you. </span>
                </div>
            </div>
            <Link to="/activities">Find more</Link>
        </div>
    )
}