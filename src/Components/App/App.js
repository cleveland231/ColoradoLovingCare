import React from 'react';
import './App.css';
import { Navigation } from '../Navigation/Navigation';
import { Home } from '../Home/Home'
import { TonTechnologies } from '../TonTechnologies/TonTechnologies'
import { Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Sides"></div>
      <div className="Center">
        <Navigation/>
        <Home/>
        <TonTechnologies/>
      </div>
      <div className="Sides"></div>
    </div>
  );
}

export default App;
