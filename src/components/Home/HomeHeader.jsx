import React, { Component } from 'react';
import '../../css/homeHeader.css';
import history from '../history';

class Header extends Component {
  constructor(props){
   super(props);
    this.handleHome = this.handleHome.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleHome () {
    const path = '/home';
    history.push(path);
  }

  handleLogout (){
    debugger;
    localStorage.removeItem('token');
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
                <li className="homeButton">
                  <button type="button" className="homebtn btn btn-primary btn-xs" onClick={this.handleHome} ><strong>in</strong></button>
                  <h5 className="h5">
                    <label>Home</label>
                  </h5>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a onClick={this.handleLogout} >
                    <h4><span className="glyphicon glyphicon-log-out"></span>Logout</h4>
                  </a>
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