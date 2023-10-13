import React from 'react';
import './Locations.css';
import CECbuilding from '../../Assets/CECbuildingApt2.jpeg'

export const Locations = () => {
  return (
    <div className="Locations">
      <h2 className="Titles"> Locations </h2>
      <div className="BodyWords">
      <h3> Main Office:  1776 S. Jackson St. Denver, CO 80210 #405 </h3>
      <img className="HomePhoto" src={ CECbuilding } alt="CEC building"/>
      <h3> We Provide Services but are not limited to: </h3>
      <div className="CoLocations">
        <li> Denver </li>
        <li> Aurora </li>
        <li> Lakewood </li>
        <li> Longmont </li>
        <li> Parker </li>
      </div>
      </div>
    </div>
  );
}
