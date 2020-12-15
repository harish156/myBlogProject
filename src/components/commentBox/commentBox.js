import React from 'react';
import './commentBox.css'
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	value : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.comment = this.comment.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    comment() {
    	this.props.addComment(this.state.value);
			this.setState({value: ''});
    }

    render() {
    	return (
    		<div className = "commentBoxSection">
	    		<textarea cols="150" rows="5" value={this.state.value} onChange={this.handleChange}/>
          <div class="addCommentButton">
              <button type="button" onClick={this.comment}> Add Comment </button>
          </div>
    		</div>
    	);
    }
}

export default CommentBox;
