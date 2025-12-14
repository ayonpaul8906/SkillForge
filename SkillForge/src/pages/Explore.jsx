import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import SkeletonCard from '../components/SkeletonCard';
import { courses } from '../data'; // Adjust path if needed

const Explore = ({ searchTerm, addToCart }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [loading, setLoading] = useState(true);
  const resultsRef = useRef(null);

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Data Science'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'All' || course.category === activeTab;
    return matchesSearch && matchesTab;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchTerm && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchTerm]);

  return (
    <>
      <Hero />
      <section className="content-section" ref={resultsRef}>
        <div className="section-header">
          <h2>Explore Courses</h2>
          <div className="tabs">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >{cat}</button>
            ))}
          </div>
        </div>

        <div className="course-grid">
          {loading ? [1,2,3,4].map(n => <SkeletonCard key={n} />) : 
            filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} onAdd={addToCart} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Explore;