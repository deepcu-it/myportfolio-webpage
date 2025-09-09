import React from 'react';
import './Contact.css';
import { FaEnvelope } from "react-icons/fa/index.js";
import { FaPhone } from "react-icons/fa/index.js";
import { FaLinkedin } from "react-icons/fa/index.js";
import { FaGithub } from "react-icons/fa/index.js";
import { FaTwitter } from "react-icons/fa/index.js";
import { FaFileDownload } from "react-icons/fa/index.js";

const CV_LINK = process.env.REACT_APP_CV_LINK || '';
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL || '';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || '';
const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact reveal">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm currently open to new opportunities and would love to hear from you.
          Feel free to reach out through any of the following channels:
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=deepghosal445@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20there%2C%0A%0AI%20am%20interested%20in%20connecting%20with%20you%20regarding%20your%20portfolio%20and%20projects.%20Looking%20forward%20to%20discussing%20further.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaEnvelope className="contact-icon" />
              deepghosal445@gmail.com
            </a>

          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <a href="tel:+1234567890" className="contact-link">
              <FaPhone className="contact-icon" />
              +91 7980346689
            </a>
          </div>

          <div className="contact-item">
            <h3>Social Links</h3>
            <div className="social-links">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin className="contact-icon" />
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub className="contact-icon" />
                GitHub
              </a>
              
            </div>
          </div>
        </div>

        <a
          href={process.env.REACT_APP_CV_LINK || ''}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
        >
          <FaFileDownload className="contact-icon" />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
