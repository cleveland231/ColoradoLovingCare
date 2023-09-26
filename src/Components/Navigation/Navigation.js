import React from 'react';
import './Navigation.css';
import MainLogo from '../../Assets/MainLogo.png'
import { NavLink , Route } from 'react-router-dom';


export const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="LogoBox">
        <img className="Logo" src={ MainLogo } alt="Main Logo"/>
      </div>
      <div className="NavigationButtons">
        <div className="ServiceButtonBox">
          <NavLink className="ServiceButtons" to="/requestservices"> Request Service </NavLink>
          <NavLink className="ServiceButtons" to="/hosthomeprovider"> Become a Host Home Provider </NavLink>
        </div>
        <div className="NavBottomButtonBox">
          <NavLink className="NavBottomButtons" to="/aboutclc"> About CLC </NavLink>
          <NavLink className="NavBottomButtons" to="/locations"> Locations </NavLink>
          <NavLink className="NavBottomButtons" to="/contact"> Contact </NavLink>
        </div>
      </div>
    </div>
  );
}

// export default Navigation;
