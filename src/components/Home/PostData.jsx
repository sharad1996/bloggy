import React, { Component } from 'react';
import '../../css/postArea.css';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';

export default class PostData extends Component {
  render() {
    debugger
    const renderpost = this.props.post.map((post, index) => {
      return (
        <div className="col-sm-8" key={index} >
          <div className="postPanel panel-default">
            <div className="panel-heading"> :</div>
              <div className="panel-body text-center">
                {post.description}
              </div>
              <div>
                <p>
                  <span><LikeButton postId={post._id} /></span>
                  <span><CommentButton postId={post._id} /></span>
                </p>
              </div>
          </div>
        </div>
      );
    });

    return (
      <div className="post-row" >
        <ul className="list-inline ">
          <li >{renderpost}</li>
        </ul>
      </div>

    );
  }
}