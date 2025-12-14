import React from 'react';
import '../lib/Skeleton.css'; // We will create this small CSS file next

const SkeletonCard = () => {
  return (
    <div className="course-card skeleton-wrapper">
      <div className="card-header skeleton-image pulse"></div>
      <div className="card-body">
        <div className="meta-info">
          <div className="skeleton-text short pulse"></div>
          <div className="skeleton-text short pulse"></div>
        </div>
        <div className="skeleton-text title pulse"></div>
        <div className="instructor-row">
          <div className="skeleton-avatar pulse"></div>
          <div className="instructor-info">
            <div className="skeleton-text medium pulse"></div>
            <div className="skeleton-text small pulse"></div>
          </div>
        </div>
        <div className="card-divider"></div>
        <div className="card-footer">
          <div className="skeleton-text price pulse"></div>
          <div className="skeleton-btn pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;