import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link, withRouter } from 'react-router-dom';

import DashBoard from './components/dashboard';
import OverView from './components/overview';
import MinerType from './components/minertype';
import Pools from './components/pools';
import Temperature from './components/temperature';
import Farms from './components/farms';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <div className="main-body">
              <DashBoard />
              <switch>
                  <Route path="/overview" component={OverView}/>
                  <Route path="/minertype" component={MinerType}/>
                  <Route path="/pools" component={Pools}/>
                  <Route path="/temperature" component={Temperature} />
                  <Route path="/farms" component={Pools}/>
              </switch>
          </div>
      </div>
    );
  }
}

export default App;
