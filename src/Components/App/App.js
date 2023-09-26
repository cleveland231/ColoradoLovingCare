import React from 'react';
import './App.css';
import { Navigation } from '../Navigation/Navigation';
import { Home } from '../Home/Home'
import { Locations } from '../Locations/Locations'
import { Contact } from '../Contact/Contact'
import { AboutCLC } from '../AboutCLC/AboutCLC'
import { HostHomeProvider } from '../HostHomeProvider/HostHomeProvider'
import { RequestServices } from '../RequestServices/RequestServices'
import { Footer } from '../Footer/Footer'
import { TonTechnologies } from '../TonTechnologies/TonTechnologies'
import { Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Sides"></div>
      <div className="Center">
          <Navigation/>
          <Home/>
          <RequestServices/>
          <HostHomeProvider/>
          <AboutCLC/>
          <Locations/>
          <Contact/>
          <Footer/>
          <TonTechnologies/>
      </div>
      <div className="Sides"></div>
    </div>
  );
}

export default App;
