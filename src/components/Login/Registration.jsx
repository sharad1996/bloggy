import React, { Component } from 'react';
import '../../css/form.css';
import Header from '../Header/Header';

class Registration extends Component {
  constructor(props) {
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    const userData = {
      name: this.refs.name.value,
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      phoneNumber: this.refs.phoneNumber.value
    };
    this.props.userSignUpRequest(userData);
    this.refs.name.value = '';
    this.refs.username.value = '';
    this.refs.email.value = '';
    this.refs.password.value = '';
    this.refs.phoneNumber.value = '';
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
          {renderAlert}
          <form name="form" className="form" >
            <div className="input-group">
              <label><b>Name</b></label>
              <input type="text" ref="name" className="form-control" placeholder="enter your name" /><br /><br />
            </div><br />
            <div className="input-group">
              <label><b>Username</b></label>
              <input type="text" ref="username" className="form-control" placeholder="enter your username" maxLength="12" /><br /><br />
            </div><br />
            <div className="input-group">
              <label><b>Email</b></label>
              <input type="email" ref="email" className="form-control" placeholder="enter your email" /><br /><br />
            </div><br />
            <div className="input-group">
              <label><b>Password</b></label>
              <input type="password" ref="password" className="form-control" placeholder="enter your password" /><br /><br />
            </div><br />
            <div className="input-group">
              <label><b>PhoneNumber</b></label>
              <input type="text" ref="phoneNumber" className="form-control" placeholder="enter your phoneNumber" maxLength="10" /><br /><br />
            </div><br />
            <div>
              <input type="button" className="btn btn-primary" name="submit" value="Submit" onClick={this.handleSubmit} /><br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
