// Home.jsx
import React, { useEffect } from 'react';
import '../Styles/Home.css';

const Home = () => {
  useEffect(() => {
    // This ensures the animation happens when the component is mounted
    const homeSection = document.querySelector('.home');
    const headerText = document.querySelector('.header-text');
    
    if (homeSection) homeSection.classList.add('fade-in');
    if (headerText) headerText.classList.add('text-reveal');
  }, []);

  return (
    <section className="home" id="home">
      <div className="header-text">
        <p className="role">Python Developer <span className="divider">||</span> Full Stack Developer</p>
        <h1>Hi, I'm <span>Ramki</span> From Sankarankovil, <br />Tenkasi District.</h1>
      </div>
    </section>
  );
};

export default Home;