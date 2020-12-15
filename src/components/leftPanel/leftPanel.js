import React, { Component } from 'react';
import './leftPanel.css';
import TabMenu from '../tabMenu/tabMenu.js';

/* Left panel component that contains tab menu listing all the
   articles under the topic. */
class LeftPanel extends Component {
    topic;
    constructor(props) {
        super(props);
        this.updateTopic  = this.updateTopic.bind(this);
    }

    updateTopic(topic)  {
        this.refs.tabMenu.updateTopic(topic);
    }

    render() {
	    return (
	        <div className="leftPanel">
	            <TabMenu ref="tabMenu" articles={Object.values(this.props.topic)} updateArticle = {this.props.updateArticle}/>
	        </div>
	    );
    }
}

export default LeftPanel;
