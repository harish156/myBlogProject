import React,  {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import NavBar from '../navBar/navBar.js'
import './header.css'

/* Header component which contains the Logo, name and Navigation bar */
class Header extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 class="blogName">Happy-log</h1>
          <NavBar updateTopic={this.props.updateTopic}/>
      </div>
    );
  }
}

export default Header;
