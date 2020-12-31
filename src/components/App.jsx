import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Join from './Join';
import Signin from './Signin';
import Signup from './Signup';
import Chat from './Chat';
import MainNav from './MainNav';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <div className="router">
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/join/:name" component={Join} />
            <Route exact path="/chat/:name/:room" component={Chat} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
