// src/Components/Breadcrumbs.jsx
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Search from './Search';

const Breadcrumbs = ({ title }) => {
  return (
    <>
    
    <div
    
      style={{
        backgroundImage: "url('images/user-hero-bg.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '385px',
        
      }}
      className="d-flex flex-column justify-content-center align-items-center text-center text-white "
    > 
      {/* Search Component */}
      <div className="mb-4 w-100">
       <Search />
      </div>

      {/* Page Title */}
      <h1 className="fw-bold text-uppercase mb-3">{title}</h1>

      {/* Breadcrumb Navigation */}
      <Breadcrumb className="d-flex justify-content-center">
        <Breadcrumb.Item href="/" className="text-decoration-none text-light">
          Home 
          &gt;
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="text-white">
          {title}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
    </>
  );
};

export default Breadcrumbs;
