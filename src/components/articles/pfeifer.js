import React from 'react';
import pfeifer from './resources/Pfiefer1.jpg';
import './yosemite.css'


function Pfeifer() {
    return (
        <div>
            <p> <h3> Pfeifer Beach - A Hole in the Wall </h3> </p>
            
            <div className="mainContent">
                 <p>
                   Pfeiffer Beach is a beautiful, unspoiled beach that's popular with locals. It's somewhat unknown among tourists and well worth your time. You'll get eye-popping offshore views of rocks and sea stacks — and occasional good surf. This beach also has unusual purple sand.
                 </p>
    

                 <img src={pfeifer} alt="MISSING JPG" className="img1"/>
                 <p>
                    If it weren't for the spectacular scenery, this would be the beach's most significant feature. No one spilled anything purple on the sand, even though it does look like grape-flavored drink mix.
                 </p>
            </div>
        </div>
    );
}

export default Pfeifer;