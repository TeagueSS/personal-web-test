import NavBar from "./navbar";
import Profile from "./profile";
import About from "./about";
import Head from "next/head";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import ExperienceHeader from "./experienceHeader"; // Adjust path if necessary

export default function Home() {
  return (
    <>
      {/* Use Head component for meta and title */}
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
        {/* External stylesheets if any */}
      </Head>

      {/* Main content starts here */}
      <main>
        <NavBar />
        
        <section id="profile">
          <Profile />
        </section>

        <section id="about">
          <About />
        </section>


        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <footer>
          <nav>
            <div className="nav-links-container">
              <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <p>Copyright &#169; 2024 Teague Sangster. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}
