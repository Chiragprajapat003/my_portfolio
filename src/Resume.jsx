import React, { useEffect } from 'react';
import './Resume.css';

const Resume = ({ onClose }) => {
  const resumeUrl = '/ChiragPrajapatResume.pdf';

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
        <a className="resume-action-btn" href={resumeUrl} download="ChiragPrajapatResume.pdf">
          DOWNLOAD PDF
        </a>
        <a className="resume-action-btn resume-open-btn" href={resumeUrl} target="_blank" rel="noreferrer">
          OPEN IN NEW TAB
        </a>
        <button className="resume-close-btn" onClick={onClose}>CLOSE</button>
      </div>
      <div className="resume-document">
        <iframe
          className="resume-frame"
          src={resumeUrl}
          title="Chirag Prajapat Resume"
        />
      </div>
    </div>
  );
};

export default Resume;
