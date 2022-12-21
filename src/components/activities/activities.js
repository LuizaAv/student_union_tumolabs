import React, {useEffect} from "react"

import chess from "../../icons/chess.JPG";
import cinema from "../../icons/cinema.jpg";
import hiking from "../../icons/hiking.jpg";
import book from "../../icons/books.jpg";
import game from "../../icons/game.jpg";

export default function Activities(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className="activitiesShortContainer">
            <h2 className="shortActivitiesH2">Clubs & Societies</h2>
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
            <div className="shortActivitiesItem">
                <img src={book} className="activitiesImg"/>
                <div className="shortAcitivitiesPart">
                    <h3><a>Book Club</a></h3>
                    <span>We're a friendly group of students holding fortnightly meetings to discuss a chosen book (as well as anything related to books and literature as a whole).
                    Got a recommendation? Send us a message!
                    Once you've become a member, make sure to join our Discord group and follow us on Instagram to keep up to date with information on meetings and events, as well as to participate in voting for the book for each upcoming meeting.</span>
                </div>
            </div>
            <div className="shortActivitiesItem">
                <img src={hiking} className="activitiesImg"/>
                <div className="shortAcitivitiesPart">
                    <h3><a>Hiking Club</a></h3>
                    <span>Hey there! Would you like to see picturesque and famous places in Armenia, and meet a whole variety of new people from outside? Or do you like an adrenaline rush and the challenge of climbing up that hill or mountain? If yes, TumoLabs Hiking Club is for you! 
                    It's never too late to join us - new members are welcome all year round.
                    We organize walks and hikes to suit all levels - from complete beginners to seasoned ramblers. </span>
                </div>
            </div>
            <div className="shortActivitiesItem">
                <img src={game} className="activitiesImg"/>
                <div className="shortAcitivitiesPart">
                    <h3><a>Game Society</a></h3>
                    <span>In our society we play all manner of video games, both online and in our weekly sessions, and across a wide variety of platforms. We hold a variety of events, including our weekly game night, along with others like visits to gaming locations, and socials on campus. We also host a platform for ESports teams to meet, greet, and compete. This group is a place for all members to find out details about events, discuss games, and find like-minded people to talk to! </span>
                </div>
            </div>
        </div>
    )
}