import React from 'react';
import './Achievements.css';

const achievements = [
  {
    title: 'Winner - StatusCode2 Hackathon',
    description: 'Won the hackathon in RISE track by building a farmer companion with yeild prediction, market analysis and alerts with multilingual support.',
    date: 'August 2026',
    proofLink: 'https://www.linkedin.com/posts/deep-ghosal-53752a255_hackathon-statuscode-fintech-activity-7366914332661563392-rrt-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7ndHsBUUDaz1SNo6VKGN4k7LYPywM76fQ',
  },
  {
    title: 'Finalist - Smart Bengal Hackathon',
    description: 'Contributed to a healthcare domain problem statement. Selected as a finalist.',
    date: 'May 2025',
    proofLink: 'https://drive.google.com/your-hackathon-certificate-link',
  },
  
  {
    title: 'Max Contest Rating - Leetcode',
    description: 'Achieved a maximum Leetcode Contest Rating of 1640.',
    date: 'Ongoing',
  },
  
  {
    title: 'AIR 547 - PW Skills Conquest',
    description: 'Achieved All India Rank 547 in a nationwide coding competition organized by Physics Wallah.',
    date: 'April 2024',
    proofLink: 'https://drive.google.com/your-pw-skills-result-link',
  },
];

const Achievements: React.FC = () => (
  <section className="achievements-section">
    <h2 className="section-title">Achievements</h2>
    <div className="achievements-list">
      {achievements.map((ach, idx) => (
        <div className="achievement-card" key={idx}>
          <div className="achievement-header">
            <h3 className="achievement-title">{ach.title}</h3>
            <div className="achievement-date">{ach.date}</div>
          </div>
          <p className="achievement-description">{ach.description}</p>
          {ach.proofLink && (
            <a
              href={ach.proofLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proof-link-button"
            >
              <button className="proof-link-button">View Proof</button>
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
