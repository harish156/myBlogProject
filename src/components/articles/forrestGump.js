import React from 'react';
import forrestGump from './resources/forrestGump.jpeg';

function ForrestGump() {
    return (
         <div>
             <h3> Forrest Gump - A beautiful painting </h3>
             <div className="img1">
                 <img src={forrestGump} alt="MISSING JPG"/>
             </div>
             <p>
                 Forrest Gump takes a character that is a societal outsider and makes us love him. We connect with his feelings and experience, even though most of us will never experience his struggles personally. How do we develop this connection? The movie humanizes Forrest Gump as someone who is like us. He wants the same things that we want and struggles with some of the same things that we struggle with. The movie also gives us a glimpse of an unfamiliar world, the struggles of Forrest that we can’t relate to, to broaden our perspective into this other human’s life and experience. By showing us that Forrest is like us, we gain empathy. By showing us his unique struggles, we also gain empathy.
             </p>
         </div>
    );
}

export default ForrestGump;
