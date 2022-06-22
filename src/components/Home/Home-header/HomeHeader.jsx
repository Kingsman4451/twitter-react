import React from 'react';
import "./Home_header.css"

const HomeHeader = () => {
  return (
    <>
      <div className="home-header position-sticky d-flex align-items-center justify-content-between py-3 ps-4">
        <h3 className="home-header-title">Home</h3>
        <i class="bi bi-stars"></i>
      </div>
    </>
  );
};

export default HomeHeader;