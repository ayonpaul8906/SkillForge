import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const Hero = ({ isAuth }) => {
  const [quote, setQuote] = useState({ content: "Loading wisdom...", author: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/quotes/random?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        setQuote({ content: data.quote, author: data.author });
      })
      .catch(() => {
        setQuote({ 
          content: "The beautiful thing about learning is that no one can take it away from you.", 
          author: "B.B. King" 
        });
      });
  }, []);

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="badge-pill"><Sparkles size={14} /> New Courses Added Weekly</div>
        <h1>Master New Skills <br/> <span className="gradient-text">10x Faster.</span></h1>
        <p className="hero-sub">
          Join 50,000+ learners mastering Design, Coding, and Business. 
          Real-world projects, expert review, and career certificates.
        </p>
        
        <div className="hero-buttons">
          {!isAuth && (
            <button className="btn-primary" onClick={() => navigate('/login')}>
              Get Started <ArrowRight size={18} />
            </button>
          )}
        </div>
      </motion.div>
      
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="floating-card glass"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="quote-icon">❝</div>
          <p className="quote-text">{quote.content}</p>
          <span className="quote-author">— {quote.author}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;