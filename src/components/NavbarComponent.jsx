// src/components/NavbarComponent.jsx
import React, { useState } from 'react';

function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="topnav">
      {/* My Name link to Home */}
      <a className="topnav-title" href="/">Karam Ahmad Kassem</a> {/* Changed to '/' for React routing if implemented later */}

      {/* Mobile menu toggle */}
      <a href="javascript:void(0);" className="mobilemenu" onClick={toggleMenu}>
        Menu
      </a>

      {/* Navigation list */}
      <ul id="topnav-items" className={`topnav-list ${menuOpen ? 'navopen' : ''}`}>
        <li className="topnav-item">
          <a className="topnav-link" href="/about">About</a>
        </li>
        <li className="topnav-item">
          <a className="topnav-link" href="/expertise">Expertise</a>
        </li>
        <li className="topnav-item">
          <a className="topnav-link" href="/experience">Experience</a>
        </li>
        <li className="topnav-item">
          <a className="topnav-link" href="/blog">Blog</a>
        </li>
        <li className="topnav-item">
          <a className="topnav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;