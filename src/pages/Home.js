import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Experience />
        <FeaturedProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
