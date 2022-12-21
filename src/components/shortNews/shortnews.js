
import React from "react";
import "./shortnews.css";
import news1 from "../../icons/news1.jpg";
import news2 from "../../icons/news2.jpg";
import news3 from "../../icons/news3.jpg";


import {Link} from "react-router-dom"

export function ShortcutOfShortNews() {
    return(
        <div>
            <h2 className="shortNewsh2"><Link to = "/newsevents" className="h22">News & Events</Link></h2>
            <div className="shortNewsItem">
                <img src={news1} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/en/from-tumo-labs-to-vxsoft/" target="_blank">
                    From TUMO Labs to VXSoft: Sasun’s Ten-Year Journey</a></h3>
                    <span>222-year-old Sasun’s long journey through the TUMO chain 
                    is quite special: from TUMO to TUMO Labs and 42 Yerevan, and 
                    now, he juggles education with his work in tech. Let’s go through
                    all the phases one by one.</span>
                </div>
            </div>
            <div className="shortNewsItem">
                <img src={news2} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/en/shortcut-to-the-tech-world/" target="_blank">Shortcut to the Tech World</a></h3>
                    <span>We’re highlighting two of our first students: data scientist 
                    Sona Gabrielyan and programmer Arthur Sahakyan. In just a short amount 
                    of time, they’ve made huge strides in their professional development.</span>
                </div>
            </div>
            <div className="shortNewsItem">
                <img src={news3} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/en/smart-city/" target="_blank">Smart city</a></h3>
                    <span>In a joint project between TUMO Labs and the Armenian National 
                    Agrarian University project, students built a smart city with automated 
                    motion detectors, water fountains, entrance systems, traffic lights, 
                    and smoke detectors.</span>
                </div>
            </div>
        </div>
    )
}

export default function Shortnews(){

    return(
        <div className="newsShortContainer">
            <ShortcutOfShortNews />
            <Link to="/newsevents">Find more</Link>
        </div>
    )
}