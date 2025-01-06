import React from 'react'
import Adminnavbar from './Adminnavbar'

const AddActivity = () => {
  return (
    <>
     <Adminnavbar />

{/* Main Content */}
<div className="main-content">
  <div className="card-container">
    {/* Top Card */}
    <div className="top-card">
      <h2>Hello Admin</h2>
      <div className="top-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
        <div className="bell-icon">
          <i className="fas fa-bell"></i>
        </div>
      </div>
    </div>

    {/* Main Dashboard Card */}
    <div className="main-card">
      <h2>Welcome to your personalized dashboard</h2>
      <p>
        Here, you can manage your profile, view donation history, and make
        new contributions to our mission.
      </p>
      <button className="button-primary">Get Started</button>
    </div>
  </div>
</div></>
  )
}

export default AddActivity