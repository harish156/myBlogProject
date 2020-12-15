import React, {Component} from 'react';
import Header from './components/header/header.js';
import Main from './components/main/main.js'
import './App.css';

class App  extends Component {
  constructor(props) {
    super(props);
    this.updateTopic = this.updateTopic.bind(this);
  }

  updateTopic(topicName) {
    console.log(topicName);
    this.refs.main.updateTopic(topicName);
  }

  render() {
    return (
      <div className="App">
          <Header updateTopic={this.updateTopic}/>
          <Main ref="main"/>
      </div>
    );
  }
}

export default App;
