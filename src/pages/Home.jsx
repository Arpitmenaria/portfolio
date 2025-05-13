import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const titles = ["MERN Stack Developer", "AI Project Builder", "Full-Stack Coder", "Problem Solver"];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const typing = setInterval(() => {
      setCurrentText(titles[index].substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      if (charIndex === titles[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % titles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [charIndex, index]);

  return (
    <section className="home-container">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm <span className="highlight">Arpit Menaria</span></h1>
        <h2 className="typing">{currentText}<span className="cursor">|</span></h2>
        <p>
          I create professional, scalable, and modern web applications using the MERN stack.
        </p>
        <a href="/projects" className="home-btn">Explore My Work</a>
      </motion.div>
    </section>
  );
};

export default Home;
