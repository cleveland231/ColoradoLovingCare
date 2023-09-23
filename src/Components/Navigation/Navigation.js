import React from 'react';
import './Navigation.css';
import MainLogo from '../../Assets/MainLogo.png'


export const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="LogoBox">
        <img className="Logo" src={ MainLogo } alt="Main Logo"/>
      </div>
      <div className="NavigationButtons">
        <div className="ServiceButtonBox">
          <button className="ServiceButtons"> Request Service </button>
          <button className="ServiceButtons"> Become a Host Home Provider </button>
        </div>
        <div className="NavBottomButtonBox">
          <button className="NavBottomButtons"> About CLC </button>
          <button className="NavBottomButtons"> Locations </button>
          <button className="NavBottomButtons"> Contact </button>
        </div>
      </div>
    </div>
  );
}

// export default Navigation;
