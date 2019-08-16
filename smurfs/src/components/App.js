import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getApod } from './actions.js/index';
import axios from 'axios';


function App(props) {
  console.log(props);
  const [smurf, setSmurf] = useState("");
  return (
    <div className="App">
      <h1> Smurf Village </h1>
      <input type="text"
             placeholder="New Smurf"
             value={smurf}
             onChange={e => setSmurf(e.target.value)}/>
      {props.loading && <div>loading...</div>}
      {props.apod && (
        <div>
          <img src={props.apod.url}/>
          <p>{props.apod.explanation}</p>
        </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      <button onClick={() => props.getApod(smurf)}>Add a new smurf</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    apod: state.apod,
    error: state.error,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getApod })(App);

