'use client';

//import SignIn from "./signIn";
import Link from "next/link";

//import styles from "./navbar.module.css";
//import Upload from "./upload";
import { useEffect, useState } from "react";

function About() {
  // Initialize user state
  return (
<nav id="desktop-nav">


    
      <div className="section-container">
       
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Summer 2023 <br />SoftwareTest Engineer ResMed
              </p>

            </div>
            <div className="details-container">
              <img
                src="assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <h2> Bachelors In Computer Science</h2>
              <p>San Diego State University</p>

              <h2>Associates In Computer Science</h2> <p>Mesa Community</p>

            </div>
          </div>

      


          <div className="text-container">
            <p>
            As a dedicated Computer Science student at San Diego State University,
             I am passionate about exploring and tackling innovative projects that 
             challenge my skills and ignite my curiosity. With a solid foundation 
             in programming and software development, I am eager to push the boundaries
              of technology through hands-on experience and creative problem-solving.
               My academic journey has equipped me with the technical expertise and
                collaborative mindset needed to thrive in dynamic project environments.
                 I am excited to contribute to impactful projects and leverage my skills
                  to drive meaningful advancements in the field of computer science.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "location.href='./#experience'")}
        
      />
    
    
    
    </nav>
  );
}

export default About;


