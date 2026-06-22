import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Implement a dynamic Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once revealed
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
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      {/* Header/Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <div className="fade-in-section">
          <Hero />
        </div>

        {/* About Section */}
        <div className="fade-in-section">
          <About />
        </div>

        {/* Skills Section */}
        <div className="fade-in-section">
          <Skills />
        </div>

        {/* Experience & Education Section */}
        <section id="experience" className="section fade-in-section">
          <div className="container">
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">A summary of my competitive programming achievements, certifications, and educational path</p>
            
            <div className="grid-2" style={{ gap: '50px', marginTop: '40px' }}>
              <Experience />
              <Education />
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <div className="fade-in-section">
          <Projects />
        </div>

        {/* Contact Form */}
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
