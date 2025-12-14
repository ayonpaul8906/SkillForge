import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import { CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      
      {/* 1. Explicitly pass isAuth={false} so the "Get Started" button appears */}
      <Hero isAuth={false} />

      <section className="features-preview">
        <div className="feature-item">
          <CheckCircle className="feature-icon" size={24} />
          <h3>Expert Mentors</h3>
          <p>Learn from industry leaders from Google, Meta, and Amazon.</p>
        </div>
        <div className="feature-item">
          <CheckCircle className="feature-icon" size={24} />
          <h3>Lifetime Access</h3>
          <p>Pay once, keep the course materials forever.</p>
        </div>
        <div className="feature-item">
          <CheckCircle className="feature-icon" size={24} />
          <h3>Certified</h3>
          <p>Get recognized certificates upon completion.</p>
        </div>
      </section>
      
      <div className="cta-section">
        <h2>Ready to start learning?</h2>
        <button className="btn-primary" onClick={() => navigate('/login')}>
          Join SkillForge Today
        </button>
      </div>
    </div>
  );
};

export default LandingPage;