import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Lock, Mail, ArrowRight } from 'lucide-react';

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        setIsAuth(true);
        localStorage.setItem('isAuth', 'true');
        toast.success(`Welcome back!`);
        navigate('/dashboard'); 
      } else {
        toast.error("Please fill in all fields");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-large">⚡</div>
          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your courses.</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary full-width" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'} <ArrowRight size={18} />
          </button>
        </form>
        
        <p className="login-footer">
          Don't have an account? <span className="highlight">Sign up free</span>
        </p>
      </div>
    </div>
  );
};

export default Login;