import React from 'react';
import javascriptMemes from './resources/javascriptMemes.jpg';

function JavascriptStory() {
    return (
         <div>
             <h3> Javascript - The Love-Hate relationship </h3>
             <div className="img1">
                 <img src={javascriptMemes} alt="MISSING JPG"/>
             </div>
             <p>
                 To be honest I was a total Stranger to Javascript until joining Salesforce. Even in college I never worked on any
                 projects that involved more of Javascript. I had the initial hesitation towards learning this new un-typed scripting
                 language that the industry is always buzzing about. After few years of working in projects that  involve Javascript I
                 still have a love-hate relationship with Javascript :P
             </p>
         </div>
    );
}

export default JavascriptStory;
