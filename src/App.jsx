import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './Loader';
import Background from './Background';
import profileImg from './assets/profile.jpg';
import brandLogo from './assets/logo.png';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPython, FaNodeJs, FaJava, FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiC, SiCplusplus, SiFigma, SiPostman, SiMongodb, SiLeetcode } from 'react-icons/si';
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Auto-scroll to section based on URL path after loading
      const path = window.location.pathname.replace('/', '');
      if (path && path !== '') {
        setTimeout(() => {
          const element = document.getElementById(path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Postman', icon: <SiPostman /> },
  ];

  const projects = [
    {
      id: 1,
      image:"https://tse4.mm.bing.net/th/id/OIP.61pKAPLuOvAm4asmUL-v9QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: " SIX-WEBSITECLONE",
      description: "Website Clone Project – A pixel-accurate clone of a real-world website built using pure HTML and CSS. Focused on layout structure, responsive design and clean disign.",
      tech: "HTML,CSS",
      link: "https://chiragprajapat.netlify.app/",
      github: "https://github.com/Chiragprajapat003/website_clone"
    },
    {
      id: 2,
      image:"https://static.vecteezy.com/system/resources/previews/010/376/649/non_2x/api-application-programming-interface-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-software-development-tool-information-technology-and-business-concept-illustration-vector.jpg",
      title: "API-INTIGRATION",
      description: "API Integration Project – A React application demonstrating client-side routing using React Router and real-time data fetching from multiple public APIs (Food, Products, Movies, Recipes).",
      tech: "React(routing)",
      link: "https://routing-api-intigration.netlify.app/",
      github: "https://github.com/Chiragprajapat003/React-project"
    },
    {
      id: 3,
      image:"https://tse1.mm.bing.net/th/id/OIP.91zs5dOPQOISNVad2VnsngHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "GAME BUILDING(4game)",
      description: "Browser Game Project – An interactive game built using HTML, CSS, and JavaScript, focusing on DOM manipulation, event handling, and game logic. CSS is used for layout and animations.",
      tech: "HTML, CSS, JS",
      link: "https://gamebuilding.netlify.app/",
      github: "https://github.com/Chiragprajapat003/game_building_project/tree/main/click_counter_game"
    }
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update the URL to look like a sub-page without a hash
      window.history.pushState(null, '', `/${id === 'home' ? '' : id}`);
    }
  };

  const onSubmitContact = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    formData.append("_captcha", "false"); 

    try {
      const response = await fetch("https://formsubmit.co/ajax/kachholi0@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="app">
      <AnimatedCursor 
        innerSize={8}
        outerSize={35}
        color="0, 242, 255"
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.brand-logo-img',
          '.social-link'
        ]}
      />
      {isLoading && <Loader />}
      <Background />

      {!isLoading && (
        <div className="content fade-in">
          <nav className="navbar">
            <div className="brand-logo-img" onClick={(e) => scrollToSection(e, 'home')}>
              <img src={brandLogo} alt="CP Logo" />
            </div>
            <div className="nav-links">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
              <a href="#certificates" onClick={(e) => scrollToSection(e, 'certificates')}>Certificates</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            </div>
          </nav>

          <main>
            <section id="home" className="hero-section">
              <div className="hero-content">
                <p className="greeting">HELLO, I AM</p>
                <h1 className="name">CHIRAG PRAJAPAT</h1>
                <div className="role-container">
                  <span className="role-prefix">&gt; </span>
                  <p className="role">FULL-STACK WEB DEVELOPER</p>
                  <span className="cursor">|</span>
                </div>
                <p className="tagline">
                  Building aesthetic, high-performance web experiences.
                </p>
                <a href="/Chirag_Prajapat_Resume.html" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>RESUME</a>
              </div>
              <div className="hero-image-container">
                <div className="hero-img-wrapper">
                  <img src={profileImg} alt="Chirag Prajapat" className="hero-img" />
                  <div className="img-glow"></div>
                </div>
              </div>
            </section>

            <section id="about" className="section-container">
              <h2 className="section-title">ABOUT ME 👨‍💻</h2>
              <div className="about-card">
                <p className="about-text">
                  I am a first-year <strong>Bachelor of Engineering</strong> student in <strong>Computer Engineering</strong> 💻 with a strong curiosity about how software systems work in real life. I focus on building practical knowledge by writing code, experimenting with ideas, and solving logical problems instead of only relying on theoretical learning 📚.
                </p>
                <br />
                <p className="about-text">
                  I have been actively learning and working with technologies such as <strong>HTML, CSS, JavaScript, React, MongoDB, C, and C++</strong> ⚙️. I also use <strong>Git and GitHub</strong> 🐙 to manage my projects and understand real-world development workflows. My interest mainly lies in web development and problem-solving, where I enjoy breaking complex challenges into smaller logical steps 🧠.
                </p>
                <br />
                <p className="about-text">
                  To strengthen my skills, I regularly practice coding and build small projects 🛠️. I have developed several website clones to improve my frontend understanding and have also created basic browser games using JavaScript 🎮 to enhance my logic-building and debugging ability. These hands-on experiences help me understand concepts like application flow, UI structure, and performance improvement.
                </p>
                <br />
                <p className="about-text">
                  I also participated in a hackathon, where I worked on a project called <strong>SkillBridge</strong> 🌍 — a local skill exchange and micro-service platform built using <strong>React</strong> ⚛️. Through this project, I gained exposure to teamwork, real-world problem solving, and building user-focused applications 🚀.
                </p>
                <br />
                <p className="about-text">
                  My goal is to become a skilled software engineer by continuously improving my fundamentals in <strong>programming, data structures, and system design</strong> 📈. I believe consistent practice, curiosity, and real project experience are the key factors that will help me grow into a confident and impactful developer in the tech industry ✨.
                </p>
              </div>
            </section>

            <section id="skills" className="section-container">
              <h2 className="section-title">TECHNICAL SKILLS</h2>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="section-container">
              <h2 className="section-title">FEATURED PROJECTS</h2>
              <div className="projects-grid">
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    {/* <div className="project-image-placeholder"></div> */}
                    <div className="project-image-placeholder">
                      <img src={project.image} alt={project.title} height={220} width={400} />
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-links">
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">VIEW PROJECT &rarr;</a>
                        <a href={project.github} target="_blank" rel="noreferrer" className="github-link"><FaGithub /> CODE</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="certificates" className="section-container">
              <h2 className="section-title">CERTIFICATES & ACHIEVEMENTS</h2>
              <div className="certificates-list">
                <div className="certificate-item">
                  <div className="cert-content">
                    <h3>Successful Completation of AI Tools and Workshop</h3>
                    <p>Issued by [Be-10X] - 2025</p>
                  </div>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7400867227635204096/" className="cert-link">VIEW CERTIFICATE &rarr;</a>
                </div>
                <div className="certificate-item">
                  <div className="cert-content">
                    <h3>Hackathon Runner Up</h3>
                    <p>Tech Fest 2024 - Innovative Solution Award</p>
                  </div>
                  <a href="#" className="cert-link">VIEW CERTIFICATE &rarr;</a>
                </div>
              </div>
            </section>

            <section id="contact" className="section-container contact-section">
              <h2 className="section-title">GET IN TOUCH</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
                  <div className="social-links">
                    <a href="mailto:kachholi0@gmail.com" className="social-link" title="Email" aria-label="Email" style={{ color: '#ea4335' }}><FaEnvelope size={28} /></a>
                    <a href="https://www.instagram.com/chiragprajapat003/" target="_blank" rel="noreferrer" className="social-link" title="Instagram" aria-label="Instagram" style={{ color: '#E1306C' }}><FaInstagram size={28} /></a>
                    <a href="https://www.linkedin.com/in/chirag-prajapat-1775bb371/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn" aria-label="LinkedIn" style={{ color: '#0077b5' }}><FaLinkedin size={28} /></a>
                    <a href="https://leetcode.com/u/Chirag_Prajapat/" target="_blank" rel="noreferrer" className="social-link" title="LeetCode" aria-label="LeetCode" style={{ color: '#f89f1b' }}><SiLeetcode size={28} /></a>
                    <a href="https://x.com/prajapat1801" target="_blank" rel="noreferrer" className="social-link" title="Twitter" aria-label="Twitter" style={{ color: '#1DA1F2' }}><FaTwitter size={28} /></a>
                    <a href="https://www.youtube.com/channel/UCflD4N0Ez8R6latoyksdcDQ" target="_blank" rel="noreferrer" className="social-link" title="YouTube" aria-label="YouTube" style={{ color: '#FF0000' }}><FaYoutube size={28} /></a>
                  </div>
                </div>
                <form className="contact-form" onSubmit={onSubmitContact}>
                  <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
                  <input type="text" name="name" placeholder="Name" className="form-input" required />
                  <input type="email" name="email" placeholder="Email" className="form-input" required />
                  <textarea name="message" placeholder="Message" className="form-input form-textarea" required></textarea>
                  <button type="submit" className="cta-button">SEND MESSAGE</button>
                </form>
              </div>
            </section>
          </main>

          <footer>
            <p>&copy; {new Date().getFullYear()} Chirag Prajapat. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
