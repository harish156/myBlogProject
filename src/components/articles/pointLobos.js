import  React  from 'react';
import pointLobosImg from './resources/PointLobos.jpg';
function PointLobos()  {
  return (
     <div>
      <p> <h3> Point Lobos - A Hidden Treasure </h3> </p>

      <div className="mainContent">
           <p>
              Point Lobos and the Point Lobos State Natural Reserve is the "crown jewel" of California's 280 state parks. Australian-born landscape artist Francis McComas described the point as the "greatest meeting of land and water in the world.
           </p>
           <div className="img1">
               <img src={pointLobosImg} alt="MISSING JPG"/>
           </div>
           <p>
              Thoroughly enjoyed this hike/walk - lots of fantastic views along many of the trails at Pt. Lobos. Just stop and admire mother nature at China Cove. Stunningly beautiful.
           </p>
           <p>
              Me and my friends planned a small picnic at the Gibson Beach. This beach is one of the most peaceful beaches I have been to. The sand is clean and has good amount of shade were you can lounge :) The best part is there are a lot of good sea life like variety of
              birds and seals near the beach which was quite beautiful!
           </p>
      </div>
    </div>
 );


}

export default PointLobos;
