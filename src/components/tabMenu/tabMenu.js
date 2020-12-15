import React, { Component } from 'react';
import './tabMenu.css'

/* TabMenu Component represents the tabItems listing
  all the articles under the topic */

class TabMenu extends Component {
    articles = [];
    constructor(props) {
        super(props);
        this.state = {
          articles: this.props.articles
        }
        //this.articles =  props.articles;
        this.updateTopic = this.updateTopic.bind(this);
    }

    updateTopic(topic) {
        var articles = Object.values(topic);
        this.setState({'articles' : articles});
    }

    onTabClick(selectedArticleTab) {
        var articleTabs = document.getElementsByClassName("tabItem");
        for (var i=0;i < articleTabs.length; i++) {
            articleTabs[i].classList.remove("active");
            if (i === selectedArticleTab) {
                articleTabs[i].classList.add("active");
            }
        }
        this.props.updateArticle(selectedArticleTab + 1);
    }

    render() {
        var names = this.state.articles;
        var tabList = [];

        for (var i=0; i < names.length; i++) {
            tabList.push(<div onClick={this.onTabClick.bind(this, i)}
                              className={i===0 ? "tabItem active" : "tabItem"}>
                                  {names[i].name}
                         </div>);
        }
        return <div className="tabMenu"> {tabList} </div>
    }
}

export default TabMenu;
