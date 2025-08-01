import React, { useEffect, useState } from 'react';
import './ProfileLinksBar.css';

// Load from environment variables
const LEETCODE_URL = process.env.REACT_APP_LEETCODE_URL || '';
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL || '';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || '';
const CV_LINK = process.env.REACT_APP_CV_LINK || '';
const HIRE_ME_EMAIL = process.env.REACT_APP_HIRE_ME_EMAIL || '';
const HIRE_ME_SUBJECT = encodeURIComponent(process.env.REACT_APP_HIRE_ME_SUBJECT || '');

const profileLinks = [
  {
    label: 'LeetCode',
    url: LEETCODE_URL,
    icon: (
      <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode">
        <path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
        <path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
        <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: LINKEDIN_URL,
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <g>
          <rect width="48" height="48" rx="10" fill="#0A66C2" />
          <path d="M14 19h5v15h-5V19zm2.5-7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm7.5 7h4.8v2.1h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.6V34h-5v-6.7c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V34h-5V19z" fill="#fff" />
        </g>
      </svg>
    ),
  },
{
  label: 'GitHub',
  url: GITHUB_URL,
  icon: (
    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 28 27.311" viewBox="0 0 28 27.311" id="github-logo">
      <path d="M28,14c0-7.732-6.268-14-14-14S0,6.268,0,14c0,6.221,4.061,11.488,9.674,13.311c0.767-0.235,0.803-0.702,0.803-0.702s0-1.383,0-2.661c-0.843,0.155-1.89,0.157-2.271,0.157c-0.464,0-2.009-0.386-2.689-2.132c-0.68-1.746-1.947-1.916-1.947-2.225s0.278-0.371,0.278-0.371s0.17,0,0.927,0c0.757,0,1.514,1.267,2.04,2.04s1.792,0.927,2.411,0.927c0.347,0,0.885-0.175,1.294-0.329c0.167-1.082,0.792-1.896,0.792-1.896c-6.243-0.556-6.397-5.223-6.397-7.046c0-1.823,1.484-3.616,1.484-3.616s-0.719-2.04,0.185-3.709c1.947,0.015,3.894,1.483,3.894,1.483S12.238,6.676,14,6.676s3.523,0.556,3.523,0.556s1.947-1.468,3.894-1.483c0.904,1.669,0.185,3.709,0.185,3.709s1.484,1.792,1.484,3.616c0,1.823-0.155,6.49-6.397,7.046c0,0,0.834,1.082,0.834,2.411s0,4.08,0,4.08s0.035,0.466,0.803,0.702C23.939,25.488,28,20.221,28,14z"></path>
    </svg>
  ),
},
  
];

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

const ProfileLinksBar: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    // LeetCode public API is not officially documented, so we use a workaround
    fetch('https://leetcode-stats-api.herokuapp.com/Deepghosal')
      .then(res => res.json())
      .then(data => {
        setStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
        });
      }).catch(err => {
        console.error('Error fetching LeetCode stats:', err);
      });
  }, []);

  // Pie chart calculation
  const total = stats?.totalSolved || 0;
  const easy = stats?.easySolved || 0;
  const medium = stats?.mediumSolved || 0;
  const hard = stats?.hardSolved || 0;

  // Pie chart SVG
  const getPie = () => {
    const sum = easy + medium + hard || 1;
    const easyPct = (easy / sum) * 100;
    const mediumPct = (medium / sum) * 100;
    const hardPct = (hard / sum) * 100;

    // Pie chart arcs
    const easyArc = (easyPct / 100) * 360;
    const mediumArc = (mediumPct / 100) * 360;
    // Start at top (270deg)
    const easyOffset = 0;
    const mediumOffset = easyArc;
    const hardOffset = easyArc + mediumArc;

    // Helper for SVG arc
    const describeArc = (startAngle: number, endAngle: number, color: string) => {
      const r = 38;
      const cx = 50;
      const cy = 50;
      const start = polarToCartesian(cx, cy, r, endAngle);
      const end = polarToCartesian(cx, cy, r, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
      return [
        <path
          key={color}
          d={`M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`}
          fill={color}
        />,
      ];
    };

    function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
      const a = ((angle - 90) * Math.PI) / 180.0;
      return {
        x: cx + r * Math.cos(a),
        y: cy + r * Math.sin(a),
      };
    }

    return (
      <svg width="100" height="100" viewBox="0 0 100 100">
        {describeArc(0, easyArc, '#4caf50')}
        {describeArc(easyArc, easyArc + mediumArc, '#ffb300')}
        {describeArc(easyArc + mediumArc, 360, '#e53935')}
        <circle cx="50" cy="50" r="25" fill="#222b45" />
        <text x="50" y="60" textAnchor="middle" fill="#fff" fontSize="0.9em" fontWeight="bold" dy="-0.3em">
          {total}
        </text>

      </svg>
    );
  };

  return (
    <div className="profile-links-bar">
      <div className="profile-links-cards">
        {profileLinks.map(link => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link-card"
          >
            <span className="profile-link-icon">{link.icon}</span>
            <span className="profile-link-label">{link.label}</span>
          </a>
        ))}
      </div>
      <div className="leetcode-pie-chart">
        <div className="pie-chart-title">LeetCode Solved</div>
        {getPie()}
        <div className="pie-chart-legend">
          <span>
            <span className="legend-dot" style={{ background: '#4caf50' }} />
            Easy: {easy}
          </span>
          <span>
            <span className="legend-dot" style={{ background: '#ffb300' }} />
            Medium: {medium}
          </span>
          <span>
            <span className="legend-dot" style={{ background: '#e53935' }} />
            Hard: {hard}
          </span>
        </div>
      </div>
      <div className="profile-links-actions">
        <a
          href={CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-action-btn"
        >
          Download CV
        </a>
        <a
          target="_blank"
          
          href={`https://mail.google.com/mail/u/0/?fs=1&to=${HIRE_ME_EMAIL}&su=${HIRE_ME_SUBJECT}&body=${`Hi Deep,%0D%0A%0D%0AI am interested in hiring you for the role - %5BYour Role%5D .%0D%0A%0D%0ABest Regards,%0D%0A%5BYour Name%5D`}&tf=cm`}
          className="profile-action-btn hire-me"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default ProfileLinksBar;
