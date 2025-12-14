import React from 'react';
import { Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const CourseCard = ({ course, index, onAdd }) => {
  
  const handleEnroll = () => {
    if (onAdd) {
      onAdd(course); 
    }
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toast("Added to wishlist", { icon: '❤️' });
  };

  return (
    <motion.div 
      className="course-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="card-header">
        <img src={course.image} alt={course.title} className="course-thumb" />
        <button className="wishlist-btn" onClick={handleWishlist}>
          <Heart size={18} />
        </button>
        {course.tags.length > 0 && (
          <span className="tag-badge">{course.tags[0]}</span>
        )}
      </div>

      <div className="card-body">
        <div className="meta-info">
          <span className="category">{course.category}</span>
          <span className="rating">
            <Star size={14} fill="#fbbf24" stroke="none" /> 
            <strong>{course.rating}</strong> ({course.reviews})
          </span>
        </div>

        <h3 className="course-title">{course.title}</h3>

        <div className="instructor-row">
          <img src={course.avatar} alt={course.instructor} className="avatar" />
          <div className="instructor-info">
            <span className="name">{course.instructor}</span>
            <span className="role">{course.role}</span>
          </div>
        </div>

        <div className="card-divider"></div>

        <div className="card-footer">
          <div className="price-block">
            <span className="current-price">${course.price}</span>
            <span className="old-price">${course.oldPrice}</span>
          </div>

          <button className="btn-outline-sm" onClick={handleEnroll}>Enroll</button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;