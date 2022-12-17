

import React from "react";
import Maincontent from "./components/maincontent/maincontent"
import Shortabout from "./components/shortabout/shortabout";
import Shortactivities from "./components/shortactivities/shortactivities";
import Shortnews from './components/shortNews/shortnews';
import "./currentpage.css";

export default function CurrentPage() {

    return(
        <div className="currentComponentsContainer">
            <Maincontent />
            <Shortnews />
            <Shortabout />
            <Shortactivities />
        </div>
    )
}