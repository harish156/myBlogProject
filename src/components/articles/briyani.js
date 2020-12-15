import React from 'react';
import briyani from './resources/briyani.jpeg';

function Briyani() {
    return (
         <div>
             <h3> Briyani - The King of all the Dishes </h3>
             <div className="img1">
                 <img src={briyani} alt="MISSING JPG"/>
             </div>
             <p>
             A mention of biryani (or biriyani) is enough to make one’s mouth water and feel hungry.
             And when it is in front of you steaming and smelling nice, the tendency is to launch a vicious attack and devour it.
             That is how much we love biryani.
             </p>
         </div>
    );
}
export default Briyani;
