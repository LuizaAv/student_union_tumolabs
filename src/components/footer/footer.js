

import React from "react"
import "./footer.css"

import {FaFacebookF, FaLinkedinIn, FaYoutubeSquare, FaTelegramPlane, FaPhoneAlt, FaEnvelope, FaLocationArrow, FaMapPin } from "react-icons/fa";
import footerLogo from "../../icons/footerLogo.png" 

export default function Footer(){

    return(
        <div className="footerContainer">
            <div className="footerIconAndLogoContainer">
                <div className="footerSocialMediaIcons">
                    <div className="footerSocialMediaLinks">
                        <a href="https://www.facebook.com/tumolabs/" target="_blank" >
                            <FaFacebookF color="#D3D3D3" size={25}/>
                        </a>
                    </div>
                    <div className="footerSocialMediaLinks">
                        <a href="https://www.linkedin.com/school/tumo-labs/" target="_blank" >
                            <FaLinkedinIn color="#D3D3D3" size={25}/>
                        </a>
                    </div>
                    <div className="footerSocialMediaLinks">
                        <a href="https://www.youtube.com/channel/UC1spAfywefFdHxrKWLZaDuA" target="_blank" >
                            <FaYoutubeSquare color="#D3D3D3" size={25}/>
                        </a>
                    </div>
                </div>
                <div className="footerLogo">
                    <a href="https://www.convergence.center/hy/" target="_blank">
                        <img src={footerLogo} />
                    </a>
                </div>
                <span className="rights">
                    © TUMO Labs 2022 / All Rights Reserved
                </span>
            </div>
            <div className="footerAddressMailPhoneContainer">
                <div className="addressContainer">
                    <FaMapPin color="#D3D3D3" size={25}/>
                    <span className="footerItems"> Halabyan 2a, Yerevan, Armenia</span>
                </div>
                <div className="phoneNumberContainer">
                    <FaPhoneAlt color="#D3D3D3" size={25} />
                    <span className="footerItems"> +374 10 398413</span>
                </div>
                <div className="emailContainer">
                    <FaEnvelope color="#D3D3D3" size={25}/>
                    <span className="footerItems"> eutumocc@tumo.org</span>
                </div>
                
            </div>
        </div>
    )
}