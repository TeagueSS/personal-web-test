'use client';

//import SignIn from "./signIn";
import Link from "next/link";

//import styles from "./navbar.module.css";
//import Upload from "./upload";
import { useEffect, useState } from "react";

function NavBar() {
  // Initialize user state
  return (
<nav id="desktop-nav">
      <div className="logo">Teague Sangster</div>
      <div>

        
        <ul className="nav-links">

          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          
         
          <li>
             <a href="#projects">Projects</a>
          
          
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;


