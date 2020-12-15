import React from 'react';
import axios from 'axios';

class CommentBody extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        comment : props.comment,
        index : props.idx
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
      var currState = this.state;
      currState.comment.body = event.target.value;
      this.setState(currState);
  }

  handleKeyPress(event) {
      if (event.key === 'Enter') {
          this.saveComment();
      }
  }

  componentDidMount() {
      var comments = {};
      var idx = this.props.idx;
      axios.get('http://localhost:4000/feeds/' + this.props.feedId).then(response => {
          comments = response.data.comments;
          this.setState({comment : comments[idx],  index : idx});

      })
      .catch(err => {
          console.log(err);
      });
  }

  updateLike(comment, commentNum) {
      var currState = this.state;
      comment.date = new Date();
      comment.likes = comment.likes + 1;
      comment.num = commentNum;
      currState.comment = comment;
      this.setState(currState);
      this.doPost(comment);
  }

  editComment() {
      var currState = this.state;
      currState.editComment = true;
      this.setState(currState);
      window.setTimeout(function() {
          document.getElementById("textArea").focus();
      }, 0)
  }

  cancelEdit() {
      var currState = this.state;
      currState.editComment = false;
      this.setState(currState);
  }

  saveComment() {
      var currState = this.state;
      currState.comment.date = new Date();
      currState.editComment = false;
      this.setState(currState);
      this.doPost(currState.comment);
  }

  doPost(comment) {
      comment.num = this.props.idx;
      axios.post('http://localhost:4000/feeds/updateComment/' + this.props.feedId, comment).then(response => {
          console.log(response);
          this.componentDidMount();
      }).catch(err => {
          console.log(err);
      });
  }

  render() {
    var currentComment = this.state.comment;
    var idx = this.state.index;
    const editing = this.state.editComment;
    currentComment.date = new Date(currentComment.date).toLocaleString();
    var that = this;
    return (
      <div className="comment">
          <div className="commentBody">
             { editing
              ? <textarea id="textArea" cols="150" rows="3" value={currentComment.body} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
              : <div>{currentComment.body}</div>
             }
          </div>
              { editing
                 ? <div className="cancel">
                       <button class="cancelButton" name="Cancel" onClick={that.cancelEdit.bind(that)}>
                           Cancel
                       </button>
                  </div>
                :
                 <div className="commentDetails">
                      <div className="date">
                          {currentComment.date}
                      </div>
                      <div className="likes">
                          Likes : {currentComment.likes}
                          <button class="likeButton" onClick={that.updateLike.bind(that, currentComment, idx)}>
                              <img class="like" src="https://img.icons8.com/wired/64/000000/facebook-like.png"/>
                          </button>
                          <button class="editButton" onClick={that.editComment.bind(that)}>
                              <img class="edit" src="https://img.icons8.com/material/24/000000/pencil--v1.png"/>
                          </button>
                      </div>
                  </div>
                }
       </div>
    );
  }
}

export default CommentBody;
