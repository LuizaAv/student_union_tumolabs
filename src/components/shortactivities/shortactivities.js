


import React from "react"
import "./shortactivities.css"

import sport from "../../icons/sportIcon.jpg";
import chess from "../../icons/chess.avif";
import { Link } from "react-router-dom";

export default function Shortactivities(){

    return(
        <div className="activitiesShortContainer">
            <h2 className="shortActivitiesH2">Activities</h2>
            <div className="shortActivitiesItem">
                <img src={sport} className="activitiesImg"/>
                <div className="shortAcitivitiesPart">
                    <h3><a href="#">Sport</a></h3>
                    <span>Lorem ispum</span>
                </div>
            </div>
            <div className="shortActivitiesItem">
                <img src={chess} className="activitiesImg"/>
                <div className="shortAcitivitiesPart">
                    <h3><a href="#">Messi</a></h3>
                    <span>Lorem ispum</span>
                </div>
            </div>
            <Link to="/activities">Find more</Link>
        </div>
    )
}