// src/App.jsx
import React from 'react';

// Import the Navbar and Footer components
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

// Import all page components from the flat pages directory
import Home from './pages/Home';


// App: The main application component that orchestrates the layout
// and includes the Navbar, all page sections, and the Footer.
function App() {
  return (
    <>
      <main className="wrapper"> {/* Changed to main tag as per template */}
        <section className="container"> {/* Added section wrapper for Navbar */}
          <NavbarComponent />
        </section>
        
        <div className="content">
          {/* Render only the Home component as the main content for now */}
          <Home />
          {/* If you add routing later, these would be rendered conditionally */}
          {/* <About /> */}
          {/* <Skills /> */}
          {/* <Experience /> */}
          {/* <Blog /> */}
          {/* <Contact /> */}
        </div>
        
        <FooterComponent />
      </main>
    </>
  );
}

export default App;