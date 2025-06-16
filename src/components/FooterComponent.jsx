// src/components/FooterComponent.jsx
import React from 'react';

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <section className="container">
        {/* AI Disclaimer */}
        <p className="ai-disclaimer">
          <i>All content on this website is handwritten.<br />This website does not contain AI-generated content.</i>
        </p>
        <div className="footer-line-height-0"></div> {/* Replicating <br style=line-height:0> */}
        
        {/* Copyright */}
        &copy;{currentYear} <b>Your Name</b>
        <div className="footer-line-height-8"></div> {/* Replicating <br style=line-height:8px> */}
      </section>
    </footer>
  );
}

export default FooterComponent;