import React, { Component } from 'react';
import './navItem.css';

class NavItem extends Component {
   constructor(props) {
       super(props);
   }

   onNavItemCLick() {
     this.props.updateTopic(this.props.itemName);
   }

   render() {
    return (
        <div className="navItem" onClick={this.onNavItemCLick.bind(this)}>
             <h2>{this.props.itemName}</h2>
        </div>
    );
   }
}

export default NavItem;
