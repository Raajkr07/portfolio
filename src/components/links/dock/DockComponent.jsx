'use client';

import React from 'react';
import Dock from '../DockSections';
import {
  IconHomeFilled,
  IconColumns3Filled,
  IconCode,
  IconAppWindowFilled,
  IconMessageFilled,
} from '@tabler/icons-react';

const DockComponent = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const dockItems = [
    { icon: <IconHomeFilled size={24} stroke={1.5} />, label: 'Home', onClick: () => scrollToSection('hero-section') },
    { icon: <IconColumns3Filled size={24} stroke={1.5} />, label: 'Fields', onClick: () => scrollToSection('fields-section') },
    { icon: <IconCode size={24} stroke={1.5} />, label: 'Skills', onClick: () => scrollToSection('skills-section') },
    { icon: <IconAppWindowFilled size={24} stroke={1.5} />, label: 'Projects', onClick: () => scrollToSection('projects-section') },
    { icon: <IconMessageFilled size={24} stroke={1.5} />, label: 'Contact', onClick: () => scrollToSection('contact-section') },
  ];

  return <Dock items={dockItems} />;
};

export default DockComponent;
