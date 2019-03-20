import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout'

import Game from './containers/Game/Game';
import Setup from './containers/Setup/Setup';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/setup" component={Setup} />
            <Route exact path="/" component={Game} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
