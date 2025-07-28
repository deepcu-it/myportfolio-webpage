import React from 'react';
import './About.css';
import DeepProfileImage from '../assets/deep_photo.jpg';
import ProfileLinksBar from './ProfileLinksBar';

const About: React.FC = () => {
  const categorizedSkills = {
    'Programming Languages': ['C++', 'JavaScript', 'Python'],
    'Web Technologies': ['HTML', 'CSS', 'ReactJS', 'Redux', 'REST API', 'Webscraping', 'Flask'],
    'Databases & Backend': ['MongoDB', 'SQL', 'NodeJS', 'Redis', 'GraphQL', 'Firebase'],
    'Data Science & ML': ['Scikit-learn', 'ML', 'Data analysis', 'Numpy', 'Pandas', 'Matplotlib'],
    'Tools & Platforms': ['Git', 'GitHub', 'Postman'],
    'Mobile Development': ['Flutter'],
  };

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title animate-fade-in">About Me</h2>
        <div className="about-grid">

          <div>
            <div className="profile-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="profile-image-wrapper">
              <img
                src={DeepProfileImage}
                alt="Deep Ghosal"
                className="profile-image"
              />
            </div>
          </div>
          <div className="bio  animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
             Full-stack developer skilled in JavaScript, C++, and Python with experience in building scalable web apps using the MERN stack and cloud tools. Interned at Accenture, improving chatbot performance with Dialogflow CX and Cloud SQL. Built a smart transport system and health monitoring app using ML. Created a custom npm tool for backend setup. Solved 400+ LeetCode problems and was a finalist in the Smart Bengal Hackathon.


            </p>
          </div>
          </div>
      <ProfileLinksBar />

        </div>

        <div className="about-grid">

          <div className="about-details">



            <div className="skills-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3>Technical Skills</h3>
              {Object.entries(categorizedSkills).map(([category, skills], catIndex) => (
                <div key={catIndex} className="skill-category">
                  <h4 className="skill-category-title" style={{ color: "#1a237e" }}>{category}</h4>
                  <div className="skills-grid">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-item animate-slide-up"
                        style={{ animationDelay: `${0.05 * (skillIndex + 1)}s` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="education animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3>Education</h3>

              <div className="education-item">
                <h4>B.Tech in Information Technology</h4>
                <p className="institution">University of Calcutta, Kolkata, India</p>
                <p className="year">2022 - 2026</p>
                <ul className="achievements">
                  <li>CGPA: 8.83 (till 5th semester)</li>
                  <li>Coursework: Data Structures & Algorithms, OS, OOPS</li>
                  <li>Full-stack Web Development (MERN), Machine Learning enthusiast</li>
                </ul>
              </div>

              <div className="education-item">
                <h4>Higher Secondary (Class XII)</h4>
                <p className="institution">Kanchrapara Harnett High School,West Bengal, India</p>
                <p className="year">2020 - 2022</p>
                <ul className="achievements">
                  <li>Percentage: 88.2%</li>
                  <li>WBCHSE Board – Science stream</li>
                </ul>
              </div>
              <div className="education-item">
                <h4>Secondary (Class X)</h4>
                <p className="institution">Kanchrapara Harnett High School, West Bengal, India</p>
                <p className="year">2014 - 2020</p>
                <ul className="achievements">
                  <li>Percentage: 89.6%</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
