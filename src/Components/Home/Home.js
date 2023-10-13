import React from 'react';
import './Home.css';
import CLCHomePage from '../../Assets/HomePhotoGray.png'

export const Home = () => {
  return (
    <div className="Home">
      <div className="Photo">
      </div>
      <div className="HomeParagraph">
        <img className="HomePhoto" src={ CLCHomePage } alt="Doctor Hands"/>
      </div>
    </div>
  );
}
