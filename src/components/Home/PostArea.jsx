import React, { Component } from 'react';
import '../../css/postArea.css';
import PostData from './PostData';

class PostArea extends Component {
   constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (status) {
    var token = localStorage.getItem('token');
    const postData = {
      description: this.refs.postDescription.value,
      status: this.refs.status.value,
      token: token
    };
    this.props.postRequest(postData);
    this.refs.postDescription.value = '';
  }

  componentDidMount () {
    this.props.loadPosts();
    let show = true;
    this.props.setShow(show);
  }

  render() {
    return (
      <div className="PostArea">
        <div className="row">
          <div className="col-sm-8">
            <div className="panel panel-primary text-left">
              <div className="panel-body">
                <textarea ref="postDescription" className="form-control" rows="4" placeholder="write your post"></textarea>
                <select className="selectpicker" ref="status" >
                  <option className="selectoption" >public</option>
                  <option className="selectoption" >private</option>
                </select>
                <button type="submit" className="postbtn btn btn-primary" onClick={this.handleSubmit} >post</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          { this.props.show ? <PostData post={this.props.posts} /> : null }
        </div>
      </div>
    );
  }
}

export default PostArea;
