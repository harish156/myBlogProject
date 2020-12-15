import React, {Component} from 'react';
import './rightPanel.css';
import Yosemite from '../articles/yosemite.js';
import Pfeifer from '../articles/pfeifer.js';
import PointLobos from '../articles/pointLobos.js';
import JavascriptStory from '../articles/javascriptStory.js'
import Briyani from '../articles/briyani.js'
import Feeds from '../feeds/feeds.js';
import axios from 'axios';

/* The right panel component which represents the content of
the article.This has an api updateArticle which sets the state. */
class RightPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {'topic' : 'Travel', 'article' : 1, 'articleId' : "5e12d5cd18c4a90deb86e964"};
		this.updateArticle = this.updateArticle.bind(this);
		this.idMap = {};
		var that = this;
		axios.get('http://localhost:4000/feeds/').then(response => {
				var data = response.data;
				for (var i = 0; i < data.length ; i++) {
				    that.idMap[data[i].title] = data[i]._id;
				}
		}).catch(err => {
				console.log(err);
		});
	}

  updateTopic(topic) {
		  let currState = this.state;
			currState.topic = topic;
			currState.article = 1;
			currState.articleId = this.idMap[this.props.articleMap[this.state.topic][1].name];
			this.setState(currState);
			this.refs.Feeds.updateFeedId(currState.articleId);
	}

	updateArticle(article) {
        console.log("Article in right panel" + article);
        let currState = this.state;
        currState.article = article;
				currState.articleId = this.idMap[this.props.articleMap[this.state.topic][article].name];
        this.setState(currState);
				this.refs.Feeds.updateFeedId(currState.articleId);
  }

	render() {
		const ArticleTag = this.props.articleMap[this.state.topic][this.state.article];
	    return (
	        <div className="rightPanel">
	           <ArticleTag/>
	           <Feeds ref="Feeds" {...this.state}/>
	        </div>
	    );
	}
}

export default RightPanel;
