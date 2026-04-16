import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './Loader';
import Background from './Background';
import profileImg from './assets/profile.jpg';
import brandLogo from './assets/logo.png';
import certificateImg from './assets/certificate.png';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPython, FaNodeJs, FaJava, FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { SiC, SiCplusplus, SiFigma, SiPostman, SiMongodb, SiLeetcode, SiJavascript } from 'react-icons/si';
import AnimatedCursor from "react-animated-cursor";
import Resume from './Resume';
import { Helmet } from "react-helmet";

function App() {
  const githubUsername = 'Chiragprajapat003';
  const [isLoading, setIsLoading] = useState(true);
  const [isCloneModalOpen, setIsCloneModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [githubMetrics, setGithubMetrics] = useState({
    commits: null,
    contributions: null,
    loading: true
  });
  const normalizedPath = currentPath.replace(/\/+$/, '') || '/';
  const pageTitles = {
    '/': 'chirag_prajapat',
    '/about': 'ABOUT /',
    '/skills': 'SKILLS /',
    '/projects': 'PROJECT /',
    '/certificates': 'CERTIFICATES /',
    '/contact': 'CONTACT /',
    '/resume': 'RESUME /',
    '/code-community': 'CODE & COMMUNITY /'
  };
  const currentPageTitle = pageTitles[normalizedPath] || 'chirag_prajapat';
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme === 'light';
  });

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

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const theme = isLightMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [isLightMode]);

  useEffect(() => {
    let ignore = false;

    const fetchGithubMetrics = async () => {
      try {
        const headers = { Accept: 'application/vnd.github+json' };

        const [commitsResponse, prsResponse] = await Promise.all([
          fetch(`https://api.github.com/search/commits?q=author:${githubUsername}&per_page=1`, { headers }),
          fetch(`https://api.github.com/search/issues?q=author:${githubUsername}+type:pr&per_page=1`, { headers })
        ]);

        const commitsData = commitsResponse.ok ? await commitsResponse.json() : null;
        const prsData = prsResponse.ok ? await prsResponse.json() : null;

        if (!ignore) {
          setGithubMetrics({
            commits: typeof commitsData?.total_count === 'number' ? commitsData.total_count : null,
            contributions: typeof prsData?.total_count === 'number' ? prsData.total_count : null,
            loading: false
          });
        }
      } catch (error) {
        if (!ignore) {
          setGithubMetrics({
            commits: null,
            contributions: null,
            loading: false
          });
        }
      }
    };

    fetchGithubMetrics();

    return () => {

      
      ignore = true;
    };
  }, [githubUsername]);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'React JS', icon: <FaReact color="#61DAFB" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'C', icon: <SiC color="#A8B9CC" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: 'GitHub', icon: <FaGithub color="#fafafa" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      title: "Interactive Archive: 6 Website Clones",
      description: "An extensive collection of meticulously crafted, pixel-perfect website clones built completely from scratch. This project demonstrates advanced mastery of layout structuring, complex CSS logic, responsive design patterns, and high-fidelity UI/UX replication. Click the interactive banner above to explore the full suite of clones, including live deployments and open-source GitHub repositories for each platform.",
      tech: "HTML,CSS",
      link: "https://chiragprajapat.netlify.app/",
      github: "https://github.com/Chiragprajapat003/website_clone"
    },
    {
      id: 2,
      image: "https://static.vecteezy.com/system/resources/previews/010/376/649/non_2x/api-application-programming-interface-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-software-development-tool-information-technology-and-business-concept-illustration-vector.jpg",
      title: "API-INTIGRATION",
      description: "API Integration Project – A React application demonstrating client-side routing using React Router and real-time data fetching from multiple public APIs (Food, Products, Movies, Recipes).",
      tech: "React(routing)",
      link: "https://routing-api-intigration.netlify.app/",
      github: "https://github.com/Chiragprajapat003/React-project"
    },
    {
      id: 3,
      image: "https://tse1.mm.bing.net/th/id/OIP.91zs5dOPQOISNVad2VnsngHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "GAME BUILDING(4game)",
      description: "Browser Game Project – An interactive game built using HTML, CSS, and JavaScript, focusing on DOM manipulation, event handling, and game logic. CSS is used for layout and animations.",
      tech: "HTML, CSS, JS",
      link: "https://gamebuilding.netlify.app/",
      github: "https://github.com/Chiragprajapat003/game_building_project/tree/main/click_counter_game"
    },
    {
      id: 4,
      image: "https://image2url.com/r2/default/images/1774849992560-90ec3e88-23f2-44f6-a3a7-ce8f195129bd.png",
      title: "SkillBridge",
      description: "SkillBridge is a responsive web application built using React and Tailwind CSS, focused on delivering a clean and intuitive user interface. It demonstrates component-based architecture, reusable UI elements, and modern frontend development.",
      tech: "React , Tailwind",
      link: "https://skilbridg.netlify.app/",
      github: "https://github.com/Chiragprajapat003/SkillBridge.git",
      youtube: "https://www.youtube.com/watch?v=vPr4sP6unSE&t=36s"
    },
    {
      id: 5,
      image: "https://image2url.com/r2/default/images/1774850495377-2099a4c0-795b-40da-aaca-e4e417a23ce6.png",
      title: "Collection-Manager-RTK",
      description: "A Collection Manager RTK project built with Redux Toolkit efficiently manages and organizes data collections with centralized state handling. It ensures scalable, predictable state updates and simplifies complex data flows in modern React applications.",
      tech: "React/Redux , Tailwind",
      link: "https://collection-manager-rtk.netlify.app/",
      github: "https://github.com/Chiragprajapat003/collection-manager-rtk.git",
      youtube: "https://www.youtube.com/watch?v=h9DdOXxArKM"
    }
  ];

  const cloneProjects = [
    {
      id: 1,
      title: "Meesho Clone",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/17130eba-2ffb-4c34-98b3-b2eb870b1d21.png",
      link: "https://chiragprajapat.netlify.app/meesho_clone/meesho",
      github: "https://github.com/Chiragprajapat003/website_clone/tree/main/meesho_clone",
      youtube: "https://www.youtube.com/watch?v=dAYShYmur3c&t=46s"
    },
    {
      id: 2,
      title: "Rapido Clone",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ffbd1e34-39cd-4685-bf4a-790c89a59525.png",
      link: "https://chiragprajapat.netlify.app/rapidoclone/",
      github: "https://github.com/Chiragprajapat003/website_clone/tree/main/rapidoclone",
      youtube: "https://www.youtube.com/watch?v=ZdHcLjmuYk4&t=33s"
    },
    {
      id: 3,
      title: "Bata Clone",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/b56c63f5-ca18-4500-953c-939d940389d7.png",
      link: "https://chiragprajapat.netlify.app/bata_india/bata2",
      github: "https://github.com/Chiragprajapat003/website_clone/tree/main/bata_india",
      youtube: "https://www.youtube.com/watch?v=eBJxdlGu-k4"
    },
    {
      id: 4,
      title: "Paytm Clone",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/2fdb6bfd-7069-4c60-873c-63c6470d2131.png",
      link: "https://chiragprajapat.netlify.app/paytym/",
      github: "https://github.com/Chiragprajapat003/website_clone/tree/main/paytym",
      youtube: "https://www.youtube.com/watch?v=N1Qil0AG3rw"
    },
    {
      id: 5,
      title: "Mozilla Clone",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5b3c5a60-7763-470b-a264-ca5962459800.png",
      link: "https://chiragprajapat.netlify.app/mozilla/",
      github: "https://github.com/Chiragprajapat003/website_clone/tree/main/mozilla",
      youtube: "#"
    },
    {
      id: 6,
      title: "cPanel Clone",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/0bb9253f-4788-42d8-b73d-37b9e9b08d64.png",
      link: "https://chiragprajapat.netlify.app/cpanel/",
      github: "https://github.com/Chiragprajapat003/website_clone/tree/main/cpanel",
      youtube: "#"
    }
  ];

  const projectDisplayOrder = [1, 4, 5, 2, 3];
  const orderedProjects = [...projects].sort(
    (a, b) => projectDisplayOrder.indexOf(a.id) - projectDisplayOrder.indexOf(b.id)
  );

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update the URL to look like a sub-page without a hash
      const nextPath = `/${id === 'home' ? '' : id}`;
      window.history.pushState(null, '', nextPath);
      setCurrentPath(nextPath);
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
      <Helmet>
        <title>{currentPageTitle}</title>
        <meta name="description" content="portfolio" />
      </Helmet>


      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color={isLightMode ? "15, 55, 90" : "135, 206, 235"}
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={2}
        showSystemCursor={true}
        zIndex={999999}
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
          '.social-link',
          '.hero-social-link',
          '.project-image-placeholder',
          '.clone-modal-close',
          '.clone-img-link',
          '.clone-icon-link',
          '.community-card'
        ]}
      />
      {isLoading && <Loader />}
      {currentPath === '/resume' && <Resume onClose={() => { window.history.pushState(null, '', '/'); setCurrentPath('/'); }} />}
      <Background theme={isLightMode ? 'light' : 'dark'} />

      {!isLoading && (
        <div className="content fade-in">
          <nav className="navbar">
            <div className="brand-logo-img" onClick={(e) => { scrollToSection(e, 'home'); setIsMobileMenuOpen(false); }}>
              <img src={brandLogo} alt="CP Logo" />
            </div>

            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={28} color={isLightMode ? "#10243b" : "#fff"} /> : <FaBars size={28} color={isLightMode ? "#10243b" : "#fff"} />}
            </div>

            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <a href="#home" onClick={(e) => { scrollToSection(e, 'home'); setIsMobileMenuOpen(false); }}>Home</a>
              <a href="#about" onClick={(e) => { scrollToSection(e, 'about'); setIsMobileMenuOpen(false); }}>About</a>
              <a href="#skills" onClick={(e) => { scrollToSection(e, 'skills'); setIsMobileMenuOpen(false); }}>Skills</a>
              <a href="#projects" onClick={(e) => { scrollToSection(e, 'projects'); setIsMobileMenuOpen(false); }}>Projects</a>
              <a href="#certificates" onClick={(e) => { scrollToSection(e, 'certificates'); setIsMobileMenuOpen(false); }}>Certificates</a>
              <a href="/chiragprajapat-resume.html" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
              <a href="#contact" onClick={(e) => { scrollToSection(e, 'contact'); setIsMobileMenuOpen(false); }}>Contact</a>
              <button
                type="button"
                className="theme-toggle-button"
                onClick={() => setIsLightMode((prev) => !prev)}
                aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
                title={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {isLightMode ? <FaMoon size={16} /> : <FaSun size={16} />}
              </button>
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
                <div className="hero-actions" style={{ display: 'inline-block' }}>
                  <div className="hero-buttons">
                    <a href="/chiragprajapat-resume.html" target="_blank" rel="noreferrer" className="cta-button" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', width: '250px', height: '60px', boxSizing: 'border-box', whiteSpace: 'nowrap', border: 'none', fontSize: '1rem', fontWeight: 'bold', fontFamily: 'inherit', cursor: 'pointer' }}>RESUME</a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="cta-button" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', width: '250px', height: '60px', boxSizing: 'border-box', whiteSpace: 'nowrap' }}>VIEW PROJECTS</a>
                  </div>
                  <div className="hero-social-links" style={{ width: '100%', justifyContent: 'space-between', marginTop: '1.5rem', gap: '0' }}>
                    <a href="mailto:kachholi0@gmail.com" className="hero-social-link" title="Email" aria-label="Email" style={{ color: '#ea4335' }}><FaEnvelope size={36} /></a>
                    <a href="https://www.instagram.com/chiragprajapat003/" target="_blank" rel="noreferrer" className="hero-social-link" title="Instagram" aria-label="Instagram" style={{ color: '#E1306C' }}><FaInstagram size={36} /></a>
                    <a href="https://www.linkedin.com/in/chirag-prajapat-1775bb371/" target="_blank" rel="noreferrer" className="hero-social-link" title="LinkedIn" aria-label="LinkedIn" style={{ color: '#0077b5' }}><FaLinkedin size={36} /></a>
                    <a href="https://leetcode.com/u/Chirag_Prajapat/" target="_blank" rel="noreferrer" className="hero-social-link" title="LeetCode" aria-label="LeetCode" style={{ color: '#f89f1b' }}><SiLeetcode size={36} /></a>
                    <a href="https://x.com/prajapat1801" target="_blank" rel="noreferrer" className="hero-social-link" title="Twitter" aria-label="Twitter" style={{ color: '#1DA1F2' }}><FaTwitter size={36} /></a>
                    <a href="https://www.youtube.com/channel/UCflD4N0Ez8R6latoyksdcDQ" target="_blank" rel="noreferrer" className="hero-social-link" title="YouTube" aria-label="YouTube" style={{ color: '#FF0000' }}><FaYoutube size={36} /></a>
                  </div>
                </div>
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
                  I am a first-year <strong>Bachelor of Engineering</strong> student in <strong>Computer Engineering</strong> 💻 with a strong curiosity for how real-world software systems work. Instead of relying only on theory, I focus on building practical knowledge by writing code, experimenting with ideas, and solving logical problems.
                </p>
                <br />
                <p className="about-text">
                  I have been working with technologies like <strong>HTML, CSS, JavaScript, React, MongoDB, C, and C++</strong> ⚙️, along with <strong>Git and GitHub</strong> 🐙 for version control. My main interest lies in web development and problem-solving, where I enjoy breaking complex problems into smaller, manageable steps and improving my understanding through hands-on practice.
                </p>
                <br />
                <p className="about-text">
                  I actively build projects to strengthen my skills, including website clones and browser-based JavaScript games 🎮. I also participated in a hackathon where I worked on <strong>SkillBridge</strong> 🌍, a skill exchange platform built with <strong>React</strong> ⚛️, which helped me gain experience in teamwork and real-world development. My goal is to continuously improve my fundamentals and grow into a skilled software engineer through consistent practice and real project experience 🚀.
                </p>
              </div>
            </section>

            <section id="skills" className="section-container">
              <h2 className="section-title">TECHNICAL SKILLS</h2>
              <div className="skills-categories-container">
                {skillCategories.map((category) => (
                  <div key={category.title} className="skill-category">
                    <h3 className="skill-category-title">{category.title}</h3>
                    <div className="skills-grid">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="skill-card">
                          <div className="skill-icon">{skill.icon}</div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="code-community" className="section-container">
              <h2 className="section-title">CODE & COMMUNITY</h2>
              <div className="community-grid">

                {/* LeetCode Card */}
                <div className="community-card">
                  <div className="community-card-header">
                    <SiLeetcode size={28} color="#ffa116" />
                    <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>LeetCode</h3>
                  </div>
                  <div className="community-card-body">
                    <img
                      src="https://leetcard.jacoblin.cool/Chirag_Prajapat?theme=dark&font=Inter&ext=heatmap"
                      alt="LeetCode Stats"
                      className="community-svg-img"
                    />
                  </div>
                  <div className="community-card-footer">
                    <a href="https://leetcode.com/u/Chirag_Prajapat/" target="_blank" rel="noreferrer" className="community-profile-link">
                      View Profile &rarr;
                    </a>
                  </div>
                </div>

                {/* GitHub Card */}
                <div className="community-card">
                  <div className="community-card-header">
                    <FaGithub size={28} color="#fff" />
                    <h3 style={{ marginLeft: '12px', fontSize: '1.4rem' }}>GitHub</h3>
                  </div>
                  <div className="community-card-body gh-card-body">
                    <div className="gh-history-title">Commit History</div>
                    <div className="gh-history-subtitle">Open Source Contributions</div>
                    <div className="gh-heatmap-wrapper">
                      <img
                        src="https://ghchart.rshah.org/00f2ff/Chiragprajapat003"
                        alt="GitHub Heatmap"
                        className="community-svg-img gh-heatmap-img"
                      />
                    </div>
                    <div className="gh-stats-wrapper">
                      <div className="gh-history-title">Commits & Contributions</div>
                      <div className="gh-stats-grid">
                        <div className="gh-metric-card">
                          <div className="gh-metric-label">Total Commits</div>
                          <div className="gh-metric-value">
                            {githubMetrics.loading ? 'Loading...' : (githubMetrics.commits ?? 'N/A')}
                          </div>
                        </div>
                        <div className="gh-metric-card">
                          <div className="gh-metric-label">PR Contributions</div>
                          <div className="gh-metric-value">
                            {githubMetrics.loading ? 'Loading...' : (githubMetrics.contributions ?? 'N/A')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="community-card-footer">
                    <a href="https://github.com/Chiragprajapat003" target="_blank" rel="noreferrer" className="community-profile-link">
                      View Profile &rarr;
                    </a>
                  </div>
                </div>

              </div>
            </section>

            <section id="projects" className="section-container">
              <h2 className="section-title">FEATURED PROJECTS</h2>
              <div className="projects-grid">
                {(showAllProjects ? orderedProjects : orderedProjects.slice(0, 3)).map((project) => (
                  <div key={project.id} className="project-card" style={project.id === 1 ? { flexBasis: '100%', maxWidth: '900px', width: '100%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid rgba(0, 242, 255, 0.4)', boxShadow: '0 0 20px rgba(0, 242, 255, 0.1)' } : {}}>
                    <div
                      className="project-image-placeholder"
                      onClick={() => {
                        if (project.id === 1) setIsCloneModalOpen(true);
                      }}
                      style={{ cursor: project.id === 1 ? 'pointer' : 'default', position: 'relative' }}
                    >
                      <img src={project.image} alt={project.title} style={{ height: project.id === 1 ? '320px' : '220px', width: '100%', objectFit: 'cover', filter: project.id === 1 ? 'brightness(0.6) contrast(1.1) hue-rotate(180deg)' : 'none' }} />

                      {/* Cinematic Gradient Fade for Clones Banner */}
                      {project.id === 1 && (
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 70%)' }}></div>
                      )}

                      {/* Cinematic Text Overlay for Clones Banner */}
                      {project.id === 1 && (
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', color: '#fff', textShadow: '0 0 15px rgba(0, 242, 255, 0.8), 0 0 30px rgba(0, 242, 255, 0.5)', fontFamily: 'var(--font-code)', fontSize: '3rem', fontWeight: '900', letterSpacing: '4px', textAlign: 'center', width: '100%' }}>WEBSITE CLONES</div>
                      )}

                      {/* Interactive Hover Reveal */}
                      {project.id === 1 && (
                        <div className="clone-overlay-hint" style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 242, 255, 0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', fontFamily: 'var(--font-code)', fontSize: '1.5rem', fontWeight: 'bold', transition: 'opacity 0.4s ease', zIndex: 10 }} onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0}> EXPLORE ALL 6 CLONES &rarr; </div>
                      )}
                    </div>
                    <div className="project-info" style={project.id === 1 ? { padding: '2.5rem 3rem' } : {}}>
                      <h3 style={project.id === 1 ? { fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' } : {}}>{project.title}</h3>
                      <p style={project.id === 1 ? { fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'center', color: 'var(--text-secondary)' } : {}}>{project.description}</p>
                      {project.id === 1 && (
                        <div className="project-links" style={{ justifyContent: 'center', marginTop: '1.25rem' }}>
                          <button
                            type="button"
                            className="cta-button"
                            onClick={() => setIsCloneModalOpen(true)}
                            style={{ minWidth: '290px' }}
                          >
                            EXPLORE ALL SIX CLONES
                          </button>
                        </div>
                      )}
                      {project.id !== 1 && (
                        <div className="project-links">
                          <a href={project.link} target="_blank" rel="noreferrer" className="project-link">VIEW PROJECT &rarr;</a>
                          <a href={project.github} target="_blank" rel="noreferrer" className="github-link"><FaGithub /> CODE</a>
                          {project.youtube && (
                            <a href={project.youtube} target="_blank" rel="noreferrer" className="github-link"><FaYoutube /> DEMO</a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {orderedProjects.length > 3 && !showAllProjects && (
                 <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                    <button className="cta-button" onClick={() => setShowAllProjects(true)}>VIEW MORE PROJECTS</button>
                 </div>
              )}
            </section>

            <section id="certificates" className="section-container">
              <h2 className="section-title">CERTIFICATES & ACHIEVEMENTS</h2>
              <div className="certificates-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
                <div className="project-card" style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
                  <a href="https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997815506" target="_blank" rel="noreferrer" style={{ display: 'block', overflow: 'hidden' }}>
                    <div className="project-image-placeholder certificate-img-wrapper" style={{ height: '260px', position: 'relative' }}>
                      <img src={certificateImg} alt="AI Tools and Workshop Certificate" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                      <div className="clone-overlay-hint" style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 242, 255, 0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', fontFamily: 'var(--font-code)', fontSize: '1.2rem', fontWeight: 'bold', transition: 'opacity 0.4s ease', zIndex: 10 }} onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0}> OPEN OFFICIAL RECORD &rarr; </div>
                    </div>
                  </a>
                  <div className="project-info">
                    <h3>Successful Completion of AI Tools and Workshop</h3>
                    <p style={{ color: 'rgba(0, 242, 255, 0.8)', fontWeight: 'bold', marginBottom: '1rem', marginTop: '-0.5rem' }}>Issued by Be-10X • 2025</p>
                    <p>Finished the Be10x AI Tools Workshop. Now using AI to create presentations, analyze data, and debug code in minutes — not hours. Gained hands-on experience in advanced prompt engineering to dramatically accelerate project timelines and optimize software delivery.</p>
                    <div className="project-links">
                      <a href="https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997815506" target="_blank" rel="noreferrer" className="project-link">VIEW CERTIFICATE &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="section-container contact-section">
              <h2 className="section-title">GET IN TOUCH</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <p>Thanks for exploring my portfolio! If you want to connect, collaborate, or have a project in mind, please enter your name and email below and send me a message.</p>
                </div>
                <form className="contact-form" onSubmit={onSubmitContact}>
                  <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
                  <input type="text" name="name" placeholder="Enter your name" className="form-input" required />
                  <input type="email" name="email" placeholder="Enter your email" className="form-input" required />
                  <textarea name="message" placeholder="Message" className="form-input form-textarea" required></textarea>
                  <button type="submit" className="cta-button">SEND MESSAGE</button>
                </form>
                <div className="social-links">
                  <a href="mailto:kachholi0@gmail.com" className="social-link" title="Email" aria-label="Email" style={{ color: '#ea4335' }}><FaEnvelope size={28} /></a>
                  <a href="https://www.instagram.com/chiragprajapat003/" target="_blank" rel="noreferrer" className="social-link" title="Instagram" aria-label="Instagram" style={{ color: '#E1306C' }}><FaInstagram size={28} /></a>
                  <a href="https://www.linkedin.com/in/chirag-prajapat-1775bb371/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn" aria-label="LinkedIn" style={{ color: '#0077b5' }}><FaLinkedin size={28} /></a>
                  <a href="https://leetcode.com/u/Chirag_Prajapat/" target="_blank" rel="noreferrer" className="social-link" title="LeetCode" aria-label="LeetCode" style={{ color: '#f89f1b' }}><SiLeetcode size={28} /></a>
                  <a href="https://x.com/prajapat1801" target="_blank" rel="noreferrer" className="social-link" title="Twitter" aria-label="Twitter" style={{ color: '#1DA1F2' }}><FaTwitter size={28} /></a>
                  <a href="https://www.youtube.com/channel/UCflD4N0Ez8R6latoyksdcDQ" target="_blank" rel="noreferrer" className="social-link" title="YouTube" aria-label="YouTube" style={{ color: '#FF0000' }}><FaYoutube size={28} /></a>
                </div>
              </div>
            </section>
          </main>

          <footer>
            <p>&copy; {new Date().getFullYear()} Chirag Prajapat. All rights reserved.</p>
          </footer>
        </div>
      )}

      {isCloneModalOpen && (
        <div className="clone-modal-overlay" onClick={() => setIsCloneModalOpen(false)}>
          <div className="clone-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="clone-modal-close" onClick={() => setIsCloneModalOpen(false)}>&times;</button>
            <h2 className="modal-title">Website Clones</h2>
            <div className="clone-modal-grid">
              {cloneProjects.map(clone => (
                <div key={clone.id} className="clone-project-card">
                  <a href={clone.link} target="_blank" rel="noreferrer" title="Go to deployed project" className="clone-img-link">
                    <img src={clone.image} alt={clone.title} className="clone-project-img" />
                    <div className="clone-overlay-hint">View Interactive Site &rarr;</div>
                  </a>
                  <div className="clone-project-info">
                    <h3>{clone.title}</h3>
                    <div className="clone-project-links">
                      <a href={clone.github} target="_blank" rel="noreferrer" className="clone-icon-link" title="Source Code">
                        <FaGithub size={22} /> Code
                      </a>
                      <a href={clone.link} target="_blank" rel="noreferrer" className="clone-icon-link" title="Open Live Site">
                        Live
                      </a>
                      {clone.youtube && (
                        <a href={clone.youtube} target="_blank" rel="noreferrer" className="clone-icon-link yt-link" title="Watch Demo">
                          <FaYoutube size={22} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
