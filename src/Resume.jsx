import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Resume.css';

const Resume = ({ onClose }) => {
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal-controls">
        <button className="resume-action-btn" onClick={() => window.print()}>DOWNLOAD PDF</button>
        <button className="resume-close-btn" onClick={onClose}>CLOSE</button>
      </div>
      
      <div className="resume-document">
        
        {/* TOP HEADER */}
        <div className="r-header-split">
          <div className="r-header-left">
            <h1>Chirag Prajapat</h1>
            <h3>Full-Stack Developer</h3>
          </div>
          <div className="r-header-right">
            <div className="r-contact-item">
              <a href="tel:+918118803483" style={{color: 'inherit', textDecoration: 'none'}}>+91 8118803483</a>
              <div className="r-icon-circle"><FaPhoneAlt size={10} /></div>
            </div>
            <div className="r-contact-item">
              <a href="mailto:kachholi0@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>kachholi0@gmail.com</a>
              <div className="r-icon-circle"><FaEnvelope size={10} /></div>
            </div>
            <div className="r-contact-item">
              <a href="https://chiragprajapat.netlify.app" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>chiragprajapat.netlify.app</a>
              <div className="r-icon-circle"><FaGlobe size={10} /></div>
            </div>
          </div>
        </div>

        {/* SUB HEADER LINKS */}
        <div className="r-subheader-links">
          <a href="https://github.com/Chiragprajapat003" target="_blank" rel="noreferrer">GitHub Profile</a>
          <span className="split-divider">|</span>
          <a href="https://www.linkedin.com/in/chirag-prajapat-1775bb371/" target="_blank" rel="noreferrer">Linkedin Profile</a>
          <span className="split-divider">|</span>
          <a href="https://leetcode.com/u/Chirag_Prajapat/" target="_blank" rel="noreferrer">Leetcode Profile</a>
          <span className="split-divider">|</span>
          <a href="https://www.youtube.com/channel/UCflD4N0Ez8R6latoyksdcDQ" target="_blank" rel="noreferrer">YouTube Profile</a>
        </div>

        {/* 2-COLUMN MAIN BODY */}
        <div className="r-main-body">
          
          {/* LEFT COLUMN */}
          <div className="r-left-col">
            
            <div className="r-section">
              <h2>SKILLS</h2>
              
              <div className="r-skill-group">
                <span className="r-skill-title">Frontend Development :</span>
                <ul><li>HTML5, CSS3, React.js, Tailwind CSS, UI/UX</li></ul>
              </div>

              <div className="r-skill-group">
                <span className="r-skill-title">Backend Development :</span>
                <ul><li>Node.js, Express.js, Authentication & Authorization</li></ul>
              </div>

              <div className="r-skill-group">
                <span className="r-skill-title">Programming Languages :</span>
                <ul><li>JavaScript, C, C++, Java</li></ul>
              </div>

              <div className="r-skill-group">
                <span className="r-skill-title">Database & Data Management :</span>
                <ul><li>MongoDB, REST APIs</li></ul>
              </div>

              <div className="r-skill-group">
                <span className="r-skill-title">Computer Science Fundamentals :</span>
                <ul><li>Object-Oriented Programming (OOP)</li></ul>
              </div>

              <div className="r-skill-group">
                <span className="r-skill-title">Tools & Deployment :</span>
                <ul><li>Git, GitHub, Postman, VScode, Netlify</li></ul>
              </div>
            </div>

            <div className="r-section">
              <h2>EDUCATION</h2>
              <ul className="r-edu-list">
                <li>
                  <div className="r-edu-title"><strong>[Your University Name]</strong></div>
                  <div className="r-edu-sub">Bachelor of Engineering</div>
                  <div className="r-edu-date">2022 - 2026</div>
                </li>
                <li>
                  <div className="r-edu-title"><strong>[Your High School Name]</strong></div>
                  <div className="r-edu-sub">Higher Secondary Education</div>
                  <div className="r-edu-date">2020 - 2022</div>
                </li>
              </ul>
            </div>

            <div className="r-section">
              <h2>CERTIFICATIONS</h2>
              <ul className="r-edu-list">
                <li>
                  <div className="r-edu-title" style={{textDecoration: 'underline'}}>AI Tools and Workshop</div>
                  <div className="r-edu-sub" style={{marginTop: '2px'}}>Issued by Be-10X (2025)</div>
                </li>
              </ul>
            </div>

            <div className="r-section">
              <h2>Languages</h2>
              <ul className="r-lang-list">
                <li>English</li>
                <li>Hindi</li>
                <li>Gujarati</li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="r-right-col">
            
            <div className="r-section">
              <h2>PROJECTS</h2>
              
              <div className="r-project-item">
                <div className="r-project-title">ContentCraft AI SaaS</div>
                <ul className="r-project-bullets">
                  <li>Engineered a high-performance content generation platform utilizing React.js, Tailwind CSS, and cutting-edge LLM APIs to draft instant viral marketing copy.</li>
                  <li>Implemented real-time conversational streaming mechanisms for generating dynamic multi-platform content.</li>
                  <li>Designed highly responsive interactive dashboards mapped directly with advanced prompt engineering systems to dramatically accelerate user writing workflows.</li>
                </ul>
                <div className="r-project-tech">
                  <strong>Tech Stack : </strong> React.js, Tailwind CSS, Node.js, Express, LLM API
                </div>
                <div className="r-project-links">
                  <a href="https://github.com/Chiragprajapat003/contectcraft_ai" target="_blank" rel="noreferrer">GitHub Link</a>
                </div>
              </div>

              <div className="r-project-item">
                <div className="r-project-title">Interactive Website Clones (6x)</div>
                <ul className="r-project-bullets">
                  <li>Architected and deployed 6 pixel-perfect, high-fidelity clones of major enterprise application screens (Paytm, cPanel, Mozilla).</li>
                  <li>Utilized vanilla HTML/CSS along with core JavaScript to build robust, component-driven layouts.</li>
                  <li>Achieved fully responsive flexbox/grid integration across all active viewports to emulate complex real-world application architectures without structural failure.</li>
                </ul>
                <div className="r-project-tech">
                  <strong>Tech Stack : </strong> HTML5, CSS3, JavaScript (ES6+)
                </div>
                <div className="r-project-links">
                  <a href="https://github.com/Chiragprajapat003/website_clone" target="_blank" rel="noreferrer">GitHub Link</a>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <a href="https://chiragprajapat.netlify.app/paytym/" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>

              <div className="r-project-item">
                <div className="r-project-title">Modern E-Commerce Solution</div>
                <ul className="r-project-bullets">
                  <li>Developed a comprehensive eCommerce platform implementing client-side routing, cart state management, and functional inventory tracking utilizing the MERN stack.</li>
                  <li>Integrated secure JWT authentication flows with deep MongoDB aggregation frameworks for querying complex product taxonomy structures.</li>
                </ul>
                <div className="r-project-tech">
                  <strong>Tech Stack : </strong> React.js, Node.js, Express.js, MongoDB, JWT
                </div>
                <div className="r-project-links">
                  <a href="https://github.com/Chiragprajapat003/E-comerce-" target="_blank" rel="noreferrer">GitHub Link</a>
                </div>
              </div>

            </div>

            <div className="r-section">
              <h2>ACHIEVEMENTS</h2>
              <ul className="r-project-bullets">
                <li>Designed and developed 10+ robust web applications and clones demonstrating high-level proficiency in modern frontend frameworks and responsive design principles.</li>
                <li>Continuously refining algorithmic problem-solving skills across competitive programming platforms including LeetCode.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
