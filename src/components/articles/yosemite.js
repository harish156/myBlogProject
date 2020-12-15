import React from 'react';
import yosemite1 from './resources/yosemite1.JPG';
import './yosemite.css'


function Yosemite() {
    return (
        <div>
            <p> <h3> Yosemite - The Home of El Capitan </h3> </p>

            <div className="mainContent">
                 <p>
                    Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.
                 </p>
                 <p>
                    Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.
                 </p>
                 <p>
                    First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.
                 </p>
                 <div className="img1">
                     <img src={yosemite1} alt="MISSING JPG"/>
                 </div>
                 <p>
                    I have been to Yosemite three times so far and it hasn't failed to amaze me each and every time! The serene beauty of the granite mountains just astonishes me and make it feel like there is no other place like this.
                 </p>
            </div>
        </div>
    );
}

export default Yosemite;
