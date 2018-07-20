import React, { Component } from 'react';
import '../../css/App.css';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="main">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
