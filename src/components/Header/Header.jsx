import React, { Component } from 'react';
import '../../css/header.css';
import history from '../history';

class Header extends Component {
  constructor(props){
   super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignUp (){
    const path = '/signup';
    history.push(path);
  }

  handleSignIn (){
    const path = '/login';
    history.push(path);
  }

  render() {
    return(
      <div className="header">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li>
                  <h1 className="h1">
                    <label className="blog">Blog</label>
                    <button type="submit" className="blogbtn btn btn-primary btn-xs" onClick={this.handleSignUp} >ER</button>
                  </h1>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a onClick={this.handleSignIn} ><h4>Sign In</h4></a>
                </li>
                <li>
                  <a className="a" onClick={this.handleSignUp} ><h4>Join now</h4></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;