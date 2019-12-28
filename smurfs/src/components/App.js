import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getApod } from './actions.js/index';
import axios from 'axios';
import smurfsList from '../components/smurfList'
import AddSmurf from './addSmurf'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <h1>Smurfs Village</h1>
        <smurfList/>
      </div>
    )
  }
}

export default App;