import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';
import MainNav from './MainNav';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <div className="router">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chat} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
