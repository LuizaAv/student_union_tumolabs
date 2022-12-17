



import React from "react";
import "./slider.css";
import HeroSlider, {Slide} from "hero-slider";

import slide from "../../icons/slide.jpg";
import slide1 from "../../icons/slide1.jpg";
import slide2 from "../../icons/slide2.jpg";
import slide3 from "../../icons/slide3.jpg";
import slide4 from "../../icons/slide4.jpg";

const listOfPic = [slide, slide1, slide2, slide3, slide4]

export default function Slider(){

    return(
        <div className="sliderContainer">
            <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            style={{
                backgroundColor: "rgba(0,0,0,0.33)"
            }}
            settings={{
                slidingDuration: 200,
                sligingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 1000,
                height: "60vh"
            }}
            >
                {listOfPic.map( item => {
                    return(
                        <Slide
                            shouldRenderMask
                            background={{
                                backgroundImageSrc: item
                            }}
                        />
                    )
                })}
            </HeroSlider>
        </div>
    )
}