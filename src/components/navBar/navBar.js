import React, {Component} from 'react';
import NavItem from '../navItem/navItem.js';
import './navBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      var topicNames = ['Travel', 'Movies', 'Food', 'Tech'];
      var navList = [];
      for  (var i = 0; i < topicNames.length; i++) {
          navList.push(<NavItem itemName={topicNames[i]} updateTopic={this.props.updateTopic}/>);
      }
      return(
          <div className="navBar">
              {navList}
          </div>
      );
    }
}

export default NavBar;
