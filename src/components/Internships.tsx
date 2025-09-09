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
        "Developed a multi-flow chatbot in Dialogflow CX that automated issue resolution, cutting manual support interventions and enabling faster query handling.",
        "Optimized retrieving performance by integrating Cloud SQL via secure webhooks for session-wise logging, reducing response latency by 38% and ensuring compliance with data security best practices.",
        "Built a chat summarization and emailing service by retrieving logs, generating summaries using the Gemini API, and delivering reports through NodeMailer, enhancing user insights and engagement.",
        "Implemented flexible FAQ management by storing queries in Google Cloud Storage (.xlsx format), enabling easy updates by nontechnical users and seamless integration with Dialogflow Data Stores."
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