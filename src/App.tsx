import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileLinksBar from './components/ProfileLinksBar';
import About from './components/About';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Initialize scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      // Clean up smooth scroll listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
          if (href) {
            document.querySelector(href)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section id="about" className="reveal fade-in">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="experience" className="reveal fade-in">
          <div className="container">
            <Internships />
          </div>
        </section>

        <section id="projects" className="reveal slide-up">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="achievements" className="reveal fade-in">
          <div className="container">
            <Achievements />
          </div>
        </section>

        <section id="contact" className="reveal slide-up">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
