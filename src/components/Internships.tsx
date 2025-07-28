import React from 'react';
import './Internships.css';
import { Certificate } from 'crypto';
import AccInternCertificate from "../assets/acc_intern/AccentureInternCertificate.png"

const Internships: React.FC = () => {
  const internships = [
    {
      company: 'Accenture',
      position: 'Advanced application engineering Intern',
      period: 'june 2025 - july 2025',
      location: 'Hyderabad, India',
      description: [
        'Built and deployed an AI-powered conversational agent using Dialogflow CX integrated with a Node.js backend, enabling natural language interaction for end users',
        'Connected Google Cloud SQL via Cloud SQL Admin API and designed schema for chat history, ensuring persistent and structured data storage',
        'Enhanced user experience by implementing custom payload buttons, improving flow completion rate by 30%.',
        'Implemented intent-based fulfillment logic and webhook integrations, enhancing agent response accuracy and dynamic flow handling',
        'Reduced average chat response latency by 38% by optimizing database query performance and dialog flow routing',
      ],
      technologies: ['Dialogflow CX', 'Node.js', 'Google Cloud SQL', 'JavaScript'],
      Certificate: AccInternCertificate
    },
  ];

  return (
    <section id="internships" className="internships reveal">
      <div className="internships-content">
        <h2 className="section-title">Professional Experience</h2>
        <div className="internships-timeline">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="internship-card"
            >
              <div className="internship-header">
                <h3>{internship.position}</h3>
                <div className="company-info">
                  <h4>{internship.company}</h4>
                  <p className="location">{internship.location}</p>
                </div>
                <p className="period">{internship.period}</p>
              </div>

              <ul className="responsibilities">
                {internship.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>

              <div className="technologies">
                {internship.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="certificate">
                <img src={internship.Certificate} alt="Certificate" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;