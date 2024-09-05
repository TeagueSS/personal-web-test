'use client';

//import SignIn from "./signIn";
import Link from "next/link";

//import styles from "./navbar.module.css";
//import Upload from "./upload";
import { useEffect, useState } from "react";

function Contact() {
  // Initialize user state
  return (
<nav id="desktop-contact">
<p className="section__text__p1">Get in Touch</p>

      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
       

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>




          <p><a href="mailto:sangsterteague@yahoo.com">sangsterteague@yahoo.com</a></p>
        </div>
        <div className="contact-info-container">
        <img
  src="/assets/linkedin.png"
  alt="LinkedIn icon"
  className="icon contact-icon"
/>
          <p><a href="www.linkedin.com/in/teague-sangster-9aa6b0262">LinkedIn</a></p>
        </div>
      </div>



    </nav>
  );
}

export default Contact;


