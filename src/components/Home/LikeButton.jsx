import React, { Component } from 'react';

class LikeButton extends Component {
  render() {
    return (
      <a className="like" onClick={this.handleLike} >
        <span className="glyphicon glyphicon-thumbs-up"></span>  Like
      </a>
    );
  }
}

export default LikeButton;