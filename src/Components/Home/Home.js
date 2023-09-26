import React from 'react';
import './Home.css';
import DoctorHands from '../../Assets/DoctorHands.png'

export const Home = () => {
  return (
    <div className="Home">
      <div className="Photo">
      </div>
      <div className="HomeParagraph">
        <img className="HomePhoto" src={ DoctorHands } alt="Doctor Hands"/>
        <div className="MissionStatment">
          At Colorado Loving Care, we are dedicated to providing compassionate and nurturing
          host home services, fostering a sense of belonging and independence for individuals,
          while also encouraging their integration into the community, all guided by love
          and care.
        </div>
      </div>
    </div>
  );
}
