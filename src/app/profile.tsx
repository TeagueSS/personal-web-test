'use client';

import { useEffect, useState } from "react";

function Profile() {
  return (
    <div id="profile">
      <div className="section__pic-container">
      <img
  src="/assets/TeaguePFP.png"
  alt="Profile picture"
  className="intro-pic"
/>      </div>

    <div>
    

    </div>

      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Teague Sangster</h1>
        <p className="section__text__p2">SDSU Computer Science</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
          

            Resume
          </button>


          
          <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => (window.location.href = 'https://linkedin.com/in/teague-sangster-9aa6b0262')}
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => (window.location.href = 'https://github.com/TeagueSS')}
          />
        </div>
      </div>

      
    </div>

    
  );
}

export default Profile;
