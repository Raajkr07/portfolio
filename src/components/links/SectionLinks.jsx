import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import {IconHomeFilled, IconColumns3Filled, } from '@tabler/icons-react';

const sections = [
  { label: 'Hero', to: 'hero-section' },
  { label: 'Fields', to: 'fields-section' },
  { label: 'Skills', to: 'skills-section' },
  { label: 'Projects', to: 'projects-section' },
  { label: 'Contact', to: 'contact-section' },
];

const SectionLinks = () => {
  const { ref: heroRef, inView } = useInView({
    threshold: 0.1,
  });
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(!inView);
  }, [inView]);

  if (!showNav) return <div ref={heroRef} />;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <ul className="flex justify-around p-3">
        {sections.map(({ label, to }) => (
          <li key={to} className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600">
            <Link 
              to={to} 
              smooth={true} 
              duration={500} 
              spy={true} 
              offset={-70}
              className="block px-2 py-1"
              activeClass="text-blue-600 border-b-2 border-blue-600"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionLinks;
