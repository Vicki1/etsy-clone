import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav.js'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav/>
      </div>
    );
  }
}

export default App;
