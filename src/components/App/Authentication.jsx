import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';

export default function (ComposedComponent) {

  // If user not authenticated render out to root
  class Authentication extends Component {

    componentWillMount() {
      debugger
      if (!this.props.authenticated) {
        history.push('/login');
      } else {
        history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        history.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.User.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
