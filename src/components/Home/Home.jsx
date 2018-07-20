import React, { Component } from 'react';
import Profile from '../../containers/Profile';
import PostArea from '../../containers/PostArea';
import HomeHeader from './HomeHeader';
import '../../css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HomeHeader />
        <div className="row">
          <div className="col-sm-3">
            <Profile />
          </div>
          <div className="col-sm-9">
            <PostArea />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
