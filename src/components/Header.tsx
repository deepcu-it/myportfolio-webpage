import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { PiListDashesBold } from "react-icons/pi";
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['about', 'projects', 'internships', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeSection]);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false); // Close menu on link click (mobile)
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="animate-fade-in">Deep Ghosal</h1>
        {/* Button to open navbar/header */}
        <button
          className="open-navbar-btn"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(true)}
          style={{ display: menuOpen ? 'none' : 'inline-flex' }}
        >
          <PiListDashesBold className="menu-icon" />
        </button>
        <nav className="desktop-nav">
          <ul>
            {[
              { id: 'about', label: 'About', delay: '0.1s' },
              { id: 'internships', label: 'Experience', delay: '0.2s' },
              { id: 'projects', label: 'Projects', delay: '0.3s' },
              { id: 'achievements', label: 'Achievements', delay: '0.35s' },
              { id: 'contact', label: 'Contact', delay: '0.4s' }
            ].map((item) => (
              <li
                key={item.id}
                className="animate-slide-down"
                style={{ animationDelay: item.delay }}
              >
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Hamburger for mobile */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none' }}
        >
          <span />
          <span />
          <span />
        </button>
        {/* Mobile nav dashboard */}
        <div className={`mobile-nav-dashboard${menuOpen ? ' open' : ''}`}>
          <ul>
            {[
              { id: 'about', label: 'About' },
              { id: 'internships', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Overlay for dashboard */}
        {menuOpen && <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;