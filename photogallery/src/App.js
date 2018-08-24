import React, { Component } from 'react';
import './App.css';
import CategoryList from './Component/CategoryList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PhotoList from './Component/PhotoList';
import PhotoDetail from './Component/PhotoDetail'

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Things I Like</h1>
          <h3>Created by Jason</h3>
        </header>
        <Switch>
          <Route path="/" exact component={CategoryList}/>
          <Route path="/:category" exact component={PhotoList}/>
          <Route path="/:category/:index" exact component={PhotoDetail}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
