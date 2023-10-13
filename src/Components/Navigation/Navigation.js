import React from 'react';
import './Navigation.css';
import MainLogo from '../../Assets/LargeLogoGray.png'
import { NavLink , Route } from 'react-router-dom';


export const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="LogoBox">
        <NavLink to="/">
        <img className="Logo" src={ MainLogo } alt="Main Logo"/>
        </NavLink>
      </div>
      <div className="NavigationButtons">
        <div className="ServiceButtonBox">
          <NavLink className="ServiceButtons" to="/hosthomeprovider"> Become a Host Home Provider </NavLink>
          <NavLink className="ServiceButtons" to="/requestservices"> Request Services </NavLink>
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
