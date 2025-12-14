import React from 'react';
import { Twitter, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const mentors = [
  { id: 1, name: "Angela Yu", role: "Full Stack Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", students: "500k+" },
  { id: 2, name: "Gary Simon", role: "UI/UX Expert", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200", students: "250k+" },
  { id: 3, name: "Jose Portilla", role: "Data Scientist", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200", students: "800k+" },
  { id: 4, name: "Seth Godin", role: "Marketing Guru", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200", students: "1M+" },
];

const Mentors = () => {
  return (
    <div className="page-container">
      <div className="section-header">
        <h2>Meet the Mentors</h2>
        <p>Learn from the top 1% of industry experts.</p>
      </div>
      
      <div className="mentors-grid">
        {mentors.map((m, i) => (
          <motion.div 
            key={m.id} 
            className="mentor-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mentor-img-wrapper">
              <img src={m.img} alt={m.name} />
            </div>
            <h3>{m.name}</h3>
            <span className="mentor-role">{m.role}</span>
            <p className="mentor-stat">{m.students} Students</p>
            <div className="mentor-socials">
              <button><Twitter size={16}/></button>
              <button><Linkedin size={16}/></button>
              <button><Globe size={16}/></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;