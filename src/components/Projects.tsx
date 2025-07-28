import React, { useState } from 'react';
import './Projects.css';
import healthMonitoringImage from '../assets/health-monitor/health-monitoring-systen.png';
import smartTransportationImage from '../assets/smart-transportation/web/smart-transportation-home.png';
import AlumniHubHomePage from "../assets/AlumniHub/web/AlumniHubHomepage.png";
import AlumniHubEventPage from "../assets/AlumniHub/web/AlumniHubEventPage.png";
import AlumniHubProfilePage from "../assets/AlumniHub/web/AlumuniHubProfilePage.png";

import smartTransPortationHome from "../assets/smart-transportation/web/smart-transportation-home.png";
import smartTransportationRoute from "../assets/smart-transportation/web/smart-transportation-route.png";
import smartTransportationsearch from "../assets/smart-transportation/web/smart-transportation-search.png";

import smartTransportationRouteMobile from "../assets/smart-transportation/mobile/smart-transportation-route.png";

import { FaDesktop, FaMobile, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'web' | 'mobile'>('web');

  const toggleViewMode = () => {
    setViewMode(viewMode === 'web' ? 'mobile' : 'web');
  };

  interface Project {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    githubLink: string;
    demoLink: string | null;
    webImages: string[] | null;
    mobileImage: string | null;
    timeframe: string; 
  }

  const projects: Project[] = [
  {
    title: 'Health Monitoring System',
    description:
      'Developed a real-time health monitoring system using Flutter that collected patient vitals like heart rate, SpO₂, and temperature, enabling continuous tracking.',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Flask','Flutter'],
    features: [
      'Real-time wearable data collection (heart rate, SpO₂, temperature)',
      'ML model detecting anomalies with over 92% accuracy',
      'Optimized preprocessing: 30% noise reduction via NumPy/Pandas',
      'Backend API with Flask for automatic alerts on abnormal vitals',
    ],
    githubLink: 'https://github.com/deepcu-it/health-monitoring-system',
    demoLink: null,
    webImages: null,
    mobileImage: healthMonitoringImage,
    timeframe: 'April 2025 – May 2025',
  },
  {
    title: 'AlumniHub',
    description:
      'AlumniHub is a platform connecting alumni with their alma mater, providing opportunities for networking, events, donations, and career advancement.',
    technologies: ['React', 'LazyLoad', 'RTk query', 'Redux', 'Authentication'],
    features: [
      'User authentication with JWT for secure access',
      'Lazy loading for optimized performance',
      'RTK Query for efficient data fetching and caching',
      'Redux for state management, ensuring a responsive UI',
      'Responsive design for seamless access on all devices'
    ],
    githubLink: 'https://github.com/deepcu-it/AlumniHub',
    demoLink: 'https://alumni-hub-rose.vercel.app/',
    webImages: [AlumniHubHomePage, AlumniHubEventPage, AlumniHubProfilePage],
    mobileImage:null,
    timeframe: 'March 2025 – April 2025'
  },
  {
    title: 'Smart‑Transportation‑System',
    description:
      'Collaborated in a team to develop a smart transport system integrating railway and metro services, optimizing backend and frontend operations.',
    technologies: ['Node.js', 'React', 'Redux', 'Redis', 'MongoDB', 'Express','JWT'],
    features: [
      `Route planning optimized: Dijkstra's algorithm reduced time from 19s to 0.8s`,
      'Security: user auth, rate limiting, payload size checks, Google login',
      'Performance: Node.js clustering; Redis caching halved response time',
      'Reduced response time by 50% for frequent queries and prevented recalculation of routes by implementing caching with Redis, improving data retrieval performance.',
    ],
    githubLink: 'https://github.com/deepcu-it/smart-transportation-system',
    demoLink: "https://smart-transportaion-system.vercel.app/",
    webImages: [smartTransPortationHome, smartTransportationRoute, smartTransportationsearch],
    mobileImage: smartTransportationRouteMobile,
    timeframe: 'July 2024 – Nov 2024',
  },
  {
    title: 'create-node-app-deep (NPM CLI)',
    description:
      'Developed a custom Node.js boilerplate initializer using `npx create-node-app-deep` to build production-ready backend applications with Express, environment setup, standard project structure.',
    technologies: ['Node.js', 'Express'],
    features: [
      'Automated setup: routes, controllers, middlewares, sample routes, env configs',
      'Standardized best-practices template for scalable backends',
    ],
    githubLink: 'https://github.com/deepcu-it/create-node-app-deep',
    demoLink: 'https://www.npmjs.com/package/create-node-app-deep',
    webImages: null,
    mobileImage: null,
    timeframe: 'March 2025',
  },
  {
    title: 'Spam‑Mail‑Classifier',
    description: 'A machine learning classifier for spam detection.',
    technologies: ['Python', 'Scikit‑learn', 'NumPy', 'Pandas'],
    features: [
      'Trained classifier to categorize emails as spam or not',
      'Implemented preprocessing, vectorization, model evaluation',
    ],
    githubLink: 'https://github.com/deepcu-it/spam-mail-classifier',
    demoLink: null,
    webImages: null,
    mobileImage: null,
    timeframe: 'June 2024',
  },
  {
    title: 'Student‑Performance‑Prediction',
    description: 'ML model to predict student academic performance.',
    technologies: ['Python', 'Scikit‑learn', 'NumPy', 'Pandas'],
    features: [
      'Predictive modeling of student scores using academic inputs',
      'Feature engineering, data cleaning, model validation',
    ],
    githubLink: 'https://github.com/deepcu-it/student-performance-prediction',
    demoLink: null,
    webImages: null,
    mobileImage: null,
    timeframe: 'July 2024',
  },
];


  return (
    <section id="projects" className="projects reveal">
      <div className="projects-content">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="view-toggle-container">
            <button 
              className={`view-toggle-btn ${viewMode === 'web' ? 'active' : ''}`}
              onClick={toggleViewMode}
              aria-label="Toggle Web View"
            >
              <FaDesktop /> Web
            </button>
            <button 
              className={`view-toggle-btn ${viewMode === 'mobile' ? 'active' : ''}`}
              onClick={toggleViewMode}
              aria-label="Toggle Mobile View"
            >
              <FaMobile /> Mobile
            </button>
          </div>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${viewMode}-view`}>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-time">{project.timeframe}</div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  <h4>My Contributions:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              {viewMode === 'web' ? (
                project.webImages && project.webImages.length > 0 ? (
                  <div className="web-images-container">
                    {project.webImages.map((image, imgIndex) => (
                      <div key={imgIndex} className="web-image-wrapper">
                        <img 
                          src={image} 
                          alt={`${project.title} - web view ${imgIndex + 1}`} 
                          className="project-image" 
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-image-message">No web view available</div>
                )
              ) : (
                project.mobileImage ? (
                  <div className="mobile-container">
                    <img 
                      src={project.mobileImage} 
                      alt={`${project.title} - mobile view`} 
                      className="project-image" 
                    />
                  </div>
                ) : (
                  <div className="no-image-message">No mobile view available</div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;