import React, { Component } from 'react';

class CommentButton extends Component {
  render() {
    return (
      <a className="comment" onClick={this.handleComment} >Comment</a>
    );
  }
}

export default CommentButton;
