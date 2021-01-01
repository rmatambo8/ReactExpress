import React from 'react';

import {Switch, Route} from 'react-router'
import About from './components/aboutPage'
import Home from './components/homePage';
export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' render={(props) => {
          return (
            <Home {...props} />
          )
        }} />
        <Route path='/home' render={(props) => {
          return (
            <Home {...props} />
          )
        }} />
        <Route path='/about' render={(props) => {
          return (
            <About {...props} />
          )
        }} />
      </Switch> 
    );
  }
}
