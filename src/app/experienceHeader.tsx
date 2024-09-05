


'use client';

//import SignIn from "./signIn";
import Link from "next/link";

//import styles from "./navbar.module.css";
//import Upload from "./upload";
import { useEffect, useState } from "react";

function ExperienceHeader() {
  // Initialize user state
  return (
<nav id="experience-header">

     
      <img
                src="/assets/TeagueAtPanini.png"
                alt="Experience icon"
                className="panini-pic"
              />
      
      <h1 className="top_title">Work Experience</h1>

    </nav>
  );
}

export default ExperienceHeader;


