import React from 'react';
import './AboutCLC.css';
import Cleveland from '../../Assets/ClevelandBoulder.JPG'
import Nova from '../../Assets/NovaBoulder.JPG'
import Jo from '../../Assets/JoBoulder.JPG'
import Moody from '../../Assets/MoodyBoulder.JPG'

export const AboutCLC = () => {
  return (
    <div className="AboutCLC">
      <h2 className="Titles"> About Colorado Loving Care </h2>
      <div className="AboutCLCBody">
      <p>
      Colorado Loving Care was founded in Colorado in 2021 with a mission to
      create a positive impact on the lives of adults with intellectual and
      developmental disabilities. Our primary focus is ensuring the well-being
      and success of the individuals who receive our support. While our hallmark
      is delivering high-quality and timely services, our true passion lies in
      providing safe and nurturing homes for all those under our care.
      </p>
      <p>
      As an agency, we specialize in the recruitment, training, and oversight
      of host homes, family caregivers, and individuals who meet the necessary
      qualifications. Colorado Loving Care conducts an annual renewal
      process, offers vigilant monitoring, facilitates suitable placements,
      and provides continuous training and assistance.
      </p>
      <p>
       Our host providers and
       family caregivers benefit from substantial support. We function as
       advocates not only for the individuals who receive support from
       Colorado Loving Care but also for our dedicated providers.
       </p>
      </div>

      <div className="MeetOurTeam">
        <div className="TeamBox">
          <img className="MeetOurTeamPhoto" src={ Nova } alt="Nova"/>
          <h2> Nova Bettinger </h2>
          <h3> CEO </h3>
        </div>
        <div className="TeamBox">
          <img className="MeetOurTeamPhoto" src={ Jo } alt="Jo"/>
          <h2> Joseph Longkutoy </h2>
          <h3> Financial Director </h3>
        </div>
        <div className="TeamBox">
          <img className="MeetOurTeamPhoto" src={ Cleveland } alt="Cleveland"/>
          <h2> Cleveland Ticoalu </h2>
          <h3> Residential Director </h3>
        </div>
        <div className="TeamBox">
          <img className="MeetOurTeamPhoto" src={ Moody } alt="Moody"/>
          <h2> Moody Rantung </h2>
          <h3> Human Resources </h3>
        </div>
      </div>

      <div className="CLCPillarBox">
        <div className="CLCPillar">
          <h2> Our Vision </h2>
          <p>
          "Colorado Loving Care places a strong emphasis on values such as
          respect, quality, care, professionalism, and teamwork in all aspects
          of our operations. Our aspiration is to establish ourselves as a
          highly esteemed residential agency in the Denver metro area, offering
          exceptional care for individuals with developmental disabilities"
          </p>
        </div>
        <div className="CLCPillar">
          <h2> Our Mission </h2>
          <p>
          "At Colorado Loving Care, we are dedicated to providing compassionate
          and nurturing host home services, fostering a sense of belonging and
          independence for individuals, while also encouraging their
          integration into the community, all guided by love and care"
          </p>
        </div>
        <div className="CLCPillar">
          <h2> Our Values </h2>
          <p>
          "Our core belief is that every person, including our clients and those
          we serve, possesses unique qualities and deserves to be cherished.
          The care and support we extend to each individual within our agency
          are tailored to their distinct needs. Our dedicated team of
          professionals is driven by principles of respect, trust, patience,
          dignity, and empathy"
          </p>
        </div>
      </div>
    </div>
  );
}
