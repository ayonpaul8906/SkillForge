import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import SkeletonCard from './components/SkeletonCard';
import Mentors from './pages/Mentors';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Login from './components/Login';         // New
import LandingPage from './pages/LandingPage'; // New

import { courses } from './lib/data'; 
import './App.css';

// --- DASHBOARD (Formerly Home) ---
const Dashboard = ({ searchTerm, setSearchTerm, addToCart }) => {
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
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchTerm && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchTerm]);

  return (
    <>
      <Hero isAuth={true}/>
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
          {loading ? (
            [1, 2, 3, 4].map(n => <SkeletonCard key={n} />)
          ) : (
            filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} onAdd={addToCart} />
            ))
          )}
        </div>
        {!loading && filteredCourses.length === 0 && <div className="no-results">No courses found.</div>}
      </section>
    </>
  );
};

// --- PROTECTED ROUTE COMPONENT ---
const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) return <Navigate to="/login" />;
  return children;
};

// --- MAIN APP ---
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  
  // Auth State (Check localStorage on load)
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem('isAuth') === 'true';
  });

  const navigate = useNavigate();

  const addToCart = (course) => {
    const exists = cart.find(item => item.id === course.id);
    if (exists) {
      toast.error("Item already in cart!");
    } else {
      setCart([...cart, course]);
      toast.success("Added to cart!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.success("Removed from cart");
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
    toast.success("Logged out successfully");
    navigate('/');
  };

  return (
    <div className="app-wrapper">
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      
      {/* Pass auth state to Navbar */}
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        cartCount={cart.length} 
        isAuth={isAuth}
        onLogout={handleLogout}
      />
      
      <main>
        <Routes>
          {/* Public Route: Landing Page */}
          <Route path="/" element={!isAuth ? <LandingPage /> : <Navigate to="/dashboard" />} />
          
          {/* Public Route: Login */}
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard searchTerm={searchTerm} setSearchTerm={setSearchTerm} addToCart={addToCart} />
            </ProtectedRoute>
          } />

          <Route path="/mentors" element={
            <ProtectedRoute isAuth={isAuth}><Mentors /></ProtectedRoute>
          } />
          
          <Route path="/cart" element={
            <ProtectedRoute isAuth={isAuth}>
              <Cart cartItems={cart} removeFromCart={removeFromCart} />
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute isAuth={isAuth}><Profile /></ProtectedRoute>
          } />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2024 SkillForge Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;