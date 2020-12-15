import React from 'react';
import axios from 'axios';
import CommentBox from '../commentBox/commentBox.js'
import CommentBody from '../commentBody/commentBody.js'
import './feeds.css';

/* The core feeds component. Uses axios library to do
http post requests for the CRUD operations.*/
class Feeds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {feed : {}, articleId : props.articleId};
        this.addComment = this.addComment.bind(this);
        this.getFeeds = this.getFeeds.bind(this);
        this.updateFeedId = this.updateFeedId.bind(this);
    }

    componentDidMount() {
        this.getFeeds(this.state.articleId);
    }

    getFeeds(feedId) {
        axios.get('http://localhost:4000/feeds/' + feedId).then(response => {
            this.setState({feed : response.data, articleId:  feedId});
        })
        .catch(err => {
            console.log(err);
        });
    }

    updateFeedId(feedId) {
        this.getFeeds(feedId);
    }

    commentList() {
        var comments = this.state.feed.comments;
        const feedId = this.props.articleId;
        var that = this;
        if (comments) {
            for (var i=0; i < comments.length; i++) {
                var currentComment = comments[i];
                currentComment.date = new Date(currentComment.date).toLocaleString();
                return (
                  <CommentBody comment={currentComment} idx={i} feedId={feedId}/>
                );
            }
        }
    }

    addComment(comment) {
        console.log(comment);
        var currDate = new Date();
        var commentObj = {
            body : comment,
            date : currDate,
            likes : 0
        };
        axios.post('http://localhost:4000/feeds/addComment/' + this.props.articleId, commentObj).then(response => {
            console.log(response);
            this.componentDidMount();
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="feeds">
              <CommentBox addComment={this.addComment}/>
              <div className="commentFeed">
                  {this.commentList()}
              </div>
            </div>
        );
    }
}

export default Feeds;
