import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from '../leftPanel/leftPanel.js'
import RightPanel from '../rightPanel/rightPanel.js'
import Yosemite from '../articles/yosemite.js';
import Pfeifer from '../articles/pfeifer.js';
import PointLobos from '../articles/pointLobos.js';
import JavascriptStory from '../articles/javascriptStory.js'
import Briyani from '../articles/briyani.js'
import ForrestGump from '../articles/forrestGump.js'
import './main.css';


/* This component represents all the content
below the header. Contains Left panel and Right panel. */

class Main extends  Component {
	constructor(props) {
		super(props);
		this.updateArticle = this.updateArticle.bind(this);
		this.articleMap  = {
					'Travel' : {
						1 : Yosemite,
						2 : Pfeifer,
						3 : PointLobos
					},
					'Movies' : {
            1 : ForrestGump
					},
					'Food' : {
						1 : Briyani
					},
					'Tech' : {
						1 : JavascriptStory
					}
			};
			this.topic = this.articleMap['Travel'];
			this.updateTopic = this.updateTopic.bind(this);
	}

	updateArticle(article) {
        console.log("article selected in left panel"+ article);
        this.refs.rightPanel.updateArticle(article);
	}

  updateTopic(topicName) {
		   this.refs.leftPanel.updateTopic(this.articleMap[topicName]);
			 this.refs.rightPanel.updateTopic(topicName);
	}

	render() {
	    return (
	        <div className="content">
	            <LeftPanel ref="leftPanel" topic={this.topic} updateArticle={this.updateArticle}/>
	            <RightPanel ref="rightPanel" articleMap={this.articleMap}/>
	        </div>
	    );
	}
}

export default Main;
