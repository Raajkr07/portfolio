import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Name from '../../assets/Name';
import AnimatedInfinity from '../../assets/AnimatedInfinity';

const Header = ({ onLogoClick }) => {

  return (
    <header
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 h-16 sm:h-20 transition-all duration-500 ease-in-out`}
    >
      <div 
        onClick={onLogoClick}
        className="cursor-pointer flex items-center ml-32"
        role="button"
        tabIndex={0}
        aria-label="Home"
      >
        <Link to="/">
          <AnimatedInfinity className="h-8 sm:h-10 w-auto" stroke={2} color="#FFFFFF" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
