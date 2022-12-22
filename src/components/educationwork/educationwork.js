

import React, {useState, useEffect} from "react";
import animationicon from "../../icons/animation.gif";
import gamedevelopment from "../../icons/gamedev.jpg";
import filmmaking from "../../icons/cinema.jpg";
import webdevelopment from "../../icons/webdev.jpg";
import graphicdesign from "../../icons/graphicdesign.jpg";
import jobfinder from "../../icons/jobfinder.jpg";
import staff from "../../icons/staffam.png";
import professional from "../../icons/professional.jpg"

import "./educationwork.css"

function Cards () {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
        <div className="programsContainer">
                <img src={animationicon}/>
                <span>
                <h4>Animation</h4>
                Animation is all about creating characters and bringing them to life. 
                By learning the principles of animation, students also explore the 
                mechanics of how we move, talk, and act in different situations. After 
                passing three levels of the animation workshop, students have a strong 
                enough base to continue animating and improving their skills independently.
                They can put all of this knowledge to use in 3D animation, stop motion
                animation and more. <a href="https://tumo.org/project/animation/" target="_blank">For more info</a>
                </span>
            </div>
            <div className="programsContainer">
                <img src={gamedevelopment}/>
                <span>
                <h4>Game development</h4>
                Playing games is easy, building a game is a wholly different experience. 
                The entire point of the TUMO game development workshops is to create a 
                new gaming universe from design to programming and everything in between. 
                By the end of the three levels, each participant will be able to design 
                and develop their own 3D video game using the Unity Engine. What they learn 
                can be applied to most industry-leading game engines.<a href="https://tumo.org/project/gamedev/" target="_blank">For more info</a>
                </span>
            </div>
            <div className="programsContainer">
                <img src={webdevelopment}/>
                <span>
                <h4>Web Development</h4>
                By learning HTML & CSS to PHP & MySQL and, finally, CMS, students acquire 
                fundamental industry skills. However the primary goal is not to teach students 
                how to follow instructions but present students with the tools to facilitate 
                problem-solving so that they can achieve independence and think beyond the 
                browser window. <a href="https://tumo.org/project/webdevelopment/" target="_blank">For more info</a>
                </span>
            </div>
        </div>
    )
}

export default function Educationwork(){
    const [showmore, setShowmore] = useState(false)

    const handleClick = () => {
        setShowmore(true)
    }

    return(
        <div className="eduMainContainer">
            <h2>Educational programs</h2>
            {!showmore ? <Cards /> :
            <div>
                <Cards />
                <div className="programsContainer">
                    <img src={filmmaking}/>
                    <span>
                    <h4>Filmmaking</h4>
                    Whether students are interested in creating fictional or documentary, 
                    art-house or blockbuster, short or feature-length, this workshop is where 
                    to get started. By the end of the third level, students conceive, produce, 
                    film and edit their own short film. Filmmaking workshops give students 
                    insight and hands-on experience with the foundations of filmmaking: planning, 
                    shooting, and editing. In short, telling a visual story. <a href="https://tumo.org/project/filmmaking/" target="_blank">For more info</a>
                    </span>
                </div>
                <div className="programsContainer">
                    <img src={graphicdesign}/>
                    <span>
                    <h4>Graphic Design</h4>
                    Graphic Design shows students how the world communicates visually, how they can
                     widen their scopes of creativity and all that awaits them within the creative 
                     market. Students begin by exploring the fundamentals of design and then move 
                     forward by creating designs and branding using industry-standard tools such as 
                     Adobe Illustrator and Photoshop. <a href="https://tumo.org/project/graphicdesign/" target="_blank">For more info</a>
                    </span>
                </div>
            </div>
            }
            <div className="loadMoreBtnContainer">
                <button 
                onClick={handleClick} 
                className="loadMoreBtn">Load more...
                </button>
            </div>
            <div className="jobPlatformsContainer">
                <h2>Job platforms for Students</h2>
                <div className="jobContainer">
                    <img src={jobfinder}/>
                    <span>
                    <h4>JobFinder.am</h4>
                    In today’s information technology world, services provided over the Internet have
                     become essential and fundamental parts of our everyday lives. To be able to
                     provide those services efficiently and effectively, companies need employees who
                    are not only technically proficient but also possess additional requisite skills 
                    in order to deliver the required services.<a href="https://www.jobfinder.am/" target="_blank">For more information</a>
                    </span>
                </div>
                <div className="jobContainer">
                    <img src={staff}/>
                    <span>
                    <h4>Staff.am</h4>
                    staff.am is the first job community, where companies directly meet with job seekers. 
                    It is the fastest growing jobs and recruitment website in Armenia. With its unique 
                    approach staff.am brings new culture of finding a new job or an employee in an easy 
                    and innovative way.
                    The idea of staff.am was born in 2015 in response to the issues identified in talent
                    recourcing and finding right career opportunities in Armenia. It was vitally 
                    important to create not just another standard job portal, but a community where 
                    employers can search and hire staff they need directly via staff.am, while employees 
                    apply for a job online and get noticed via staff.am.
                     <a href="https://staff.am/en" target="_blank">For more information</a>
                    </span>
                </div>
                <div className="jobContainer">
                    <img src={professional}/>
                    <span>
                    <h4>Professional.am</h4>
                    Our mission is to provide applicants with the best jobs and companies 
                    with qualified specialists. This project is our best effort at making 
                    the process of posting announcements as fast and easy as possible 
                    allowing companies to get plenty of applications in a short period 
                    of time.<a href="https://www.professionals.am/home" target="_blank">For more information</a>
                    </span>
                </div>
            </div>
        </div>
    )
}