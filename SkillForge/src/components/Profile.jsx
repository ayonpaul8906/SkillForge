import React from 'react';
import { Save, Camera } from 'lucide-react';

const Profile = () => {
  return (
    <div className="page-container">
      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="profile-header">
            <div className="profile-pic-wrapper">
              <div className="profile-pic">NU</div>
              <button className="camera-btn"><Camera size={14}/></button>
            </div>
            <h3>New User</h3>
            <p>Student</p>
          </div>
          <div className="profile-menu">
            <button className="active">Personal Info</button>
            <button>Billing</button>
            <button>Notifications</button>
            <button>Security</button>
          </div>
        </aside>

        <main className="profile-content">
          <h2>Personal Information</h2>
          <form className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" defaultValue="New" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" defaultValue="User" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" defaultValue="New.User@example.com" />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea rows="4" defaultValue="Passionate learner focused on Web Development."></textarea>
            </div>
            <div className="form-actions">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">Save Changes <Save size={16}/></button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;