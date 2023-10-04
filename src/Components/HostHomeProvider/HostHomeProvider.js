import React from 'react';
import './HostHomeProvider.css';
import HHPApplication from '../../Assets/HHPApplication.pdf'
import CapsCheck from '../../Assets/CapsCheck.pdf'
import FrequentQuestions from '../../Assets/FrequentQuestions.pdf'

export const HostHomeProvider = () => {
  return (
    <div className="HostHomeProvider">
      <h2 className="Titles"> Becoming a Host Home Provider </h2>

      <div className="MinimumQualifications">

      <h3> Step 1. Download and Fill out Both Forms </h3>
      <h3> Step 2. Send to colovingcare1@gmail.com </h3>
      <div classname="DownloadButtonBox">
        <a href={HHPApplication} download="HHPAppplication">
          <button id="DownloadingButtons"> CLC HHP Application </button>
        </a>
        <a href={CapsCheck} download="CapsCheck">
          <button id="DownloadingButtons"> Caps Check Form </button>
        </a>
      </div>
      <p> Download to View Frequently Asked Questions </p>
        <a href={FrequentQuestions} download="FrequentQuestions">
          <button id="DownloadingButtons"> Frequently Asked Questions </button>
        </a>
        <h2> Minimum Qualifications </h2>
          <div className="LiStyling">
            <li> Prior experience as a Host Home Provider is preferred. </li>
            <li> Minimum age requirement is 18 years old. </li>
            <li> Possession of a GED or high school diploma is necessary. </li>
            <li> Reliable transportation is essential, with the ability to safely transport. </li>
            <li> Successful completion of multiple background checks is required. </li>
            <li> Capable of lifting weights ranging from 50 to 75 pounds. </li>
            <li> Excellent interpersonal skills to engage with families and clients. </li>
            <li> Openness to working with individuals who exhibit challenging behavior. </li>
            <li> Strong attention to detail and task-oriented mindset. </li>
            <li> Reliability, dependability, and self-motivation are key. </li>
            <li> An appropriate living environment with at least one available bedroom is necessary. </li>
            <li> Prior experience of working with the developmentally disabled population. </li>
          </div>
        </div>


    </div>
  );
}
