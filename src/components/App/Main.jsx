import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import Login from '../../containers/Login';
import Registration from '../../containers/Registration';
import Authentication from './Authentication';
import Home from '../Home/Home';

class Main extends Component {

  render() {

    return (
      <div className="Main">
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={Authentication(Home)} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Registration} />
            debugger;
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;