


import React, {useEffect} from "react";
import {ShortcutOfShortNews} from "../shortNews/shortnews";
import "./newsevents.css";
import "../shortNews/shortnews.css";

import news4 from "../../icons/news4.jpg";
import news5 from "../../icons/news5.jpg";
import news6 from "../../icons/news6.jpg";

export default function Newsevents(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="newsEventsContainer">
            <ShortcutOfShortNews />
            <div className="shortNewsItem">
                <img src={news4} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/en/the-revolving-time-machine-of-tumo-labs-and-42-yerevan/" target="_blank">The revolving time machine of TUMO Labs and 42 Yerevan</a></h3>
                    <span>TUMO Labs and 42 Yerevan are destined to find their new home in the future building 
                    of the EU TUMO Convergence Center for Engineering and Applied Science, designed by 
                    internationally renowned architecture firm MVRDV. In the meantime, they have been working 
                    productively on the 4th floor of the TUMO building.</span>
                </div>
            </div>
            <div className="shortNewsItem">
                <img src={news5} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/en/text-summarization-and-sentiment-analysis/" target="_blank">Text Summarization and Sentiment Analysis</a></h3>
                    <span>tudents in the TUMO Labs and Krisp project are developing two projects. 
                    One summarizes texts and separates the main point and the other recognizes 
                    the text’s tone of voice of a text — positive, negative or neutral.</span>
                </div>
            </div>
            <div className="shortNewsItem">
                <img src={news6} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/en/covid-passport/" target="_blank">COVID Passport</a></h3>
                    <span>In the TUMO Labs & Coronatest project, students created an 
                    application that will allow you to consolidate your family’s COVID-19 
                    history.</span>
                </div>
            </div>
        </div>
    )
}