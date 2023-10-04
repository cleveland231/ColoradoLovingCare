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
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Sides"></div>
      <div className="Center">
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/requestservices" element={<RequestServices/>} />
            <Route path="/hosthomeprovider" element={<HostHomeProvider/>} />
            <Route path="/aboutclc" element={<AboutCLC/>} />
            <Route path="/locations" element={<Locations/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
          <TonTechnologies/>
      </div>
      <div className="Sides"></div>
    </div>
  );
}

export default App;
