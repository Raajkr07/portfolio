import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {
  IconHomeFilled,
  IconColumns3Filled,
  IconCode,
  IconAppWindowFilled,
  IconMessageFilled,
} from '@tabler/icons-react';

const sections = [
  { icon: IconHomeFilled, to: 'hero' },
  { icon: IconColumns3Filled, to: 'fields' },
  { icon: IconCode, to: 'technical-skills' },
  { icon: IconAppWindowFilled, to: 'projects' },
  { icon: IconMessageFilled, to: 'contact' },
];

const SectionLinks = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(heroElement);

    return () => observer.unobserve(heroElement);
  }, []);

  if (!showNav) return null;

  return (
    <nav
      className="fixed bottom-3 left-1/2 transform -translate-x-1/2 border-2 border-[#392E4E] w-full max-w-[400px] bg-[#130329] bg-opacity-75 shadow-md z-50 rounded-lg"
      aria-label="Section navigation"
    >
      <ul className="flex justify-between md:justify-around p-3 text-white">
        {sections.map(({ icon: Icon, to }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              duration={100}
              isDynamic={false}
              spy={true}
              offset={-70}
              className="flex flex-col items-center text-sm font-medium text-gray-200"
              activeClass="text-[#a176ff] border-b-2 border-[#a176ff]"
            >
              <Icon
                size={24}
                stroke={1.5}
                className="hover:text-[#a176ff] cursor-pointer transition-colors duration-200"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionLinks;
