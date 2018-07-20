import React, { Component } from 'react';
import '../../css/form.css';
import Header from '../Header/Header';
import history from '../history';

class Login extends Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(this.props.token) {
      history.push('/')
    }
  }

  handleSubmit (){
    const userData = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };

    this.props.userLoginRequest(userData);
    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  render() {
    const alert = this.props.message;
    const renderAlert = (
      <div className="alert alert-default alert-dismissable" >
        <strong>{alert}</strong>
      </div>
    );

    return (
      <div className="container">
        <Header />
        <div className="card card-container">
          <div>{renderAlert}</div>
          <form name="form" className="form" >
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input type="text" ref="username" className="form-control" placeholder="enter the username" id="user" /><br /><br />
            </div><br />
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
              <input type="password" ref="password" className="form-control" placeholder="enter the password" id="password" /><br /><br />
            </div><br />
            <div>
              <input type="button" className="btn btn-success" value="Login" onClick={this.handleSubmit} /><br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
