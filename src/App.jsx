import { useEffect } from 'react';
import Cursor from './components/Cursor';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for scroll-reveal fade in animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('.fade-in-section');

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Interactive Custom Mouse Cursor (c-dot & c-ring) */}
      <Cursor />

      {/* Dynamic Cosmic Starfield & Nebula Canvas Background */}
      <StarBackground />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <div className="fade-in-section">
          <Hero />
        </div>

        {/* 01 - About Section */}
        <div className="fade-in-section">
          <About />
        </div>

        {/* 02 - Education Section */}
        <div className="fade-in-section">
          <Education />
        </div>

        {/* 03 - Skills Section */}
        <div className="fade-in-section">
          <Skills />
        </div>

        {/* 04 - Projects Section */}
        <div className="fade-in-section">
          <Projects />
        </div>

        {/* 05 - Experience & Achievements Section */}
        <div className="fade-in-section">
          <Experience />
        </div>

        {/* 06 - Contact Section */}
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
