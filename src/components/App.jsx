import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatBoard from './ChatBoard';
import Home from './Home';
import MainNav from './MainNav';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <div className="router">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/en">
              <ChatBoard />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
