import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const { ref: heroRef, inView } = useInView({
    threshold: 0.1,
  });
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(!inView);
  }, [inView]);

  if (!showNav) return <div ref={heroRef} aria-hidden="true" />;

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 border-2 border-[#a176ff] w-full max-w-[700px] bg-[#2B0F52] bg-opacity-95 shadow-md z-50 rounded-lg">
      <ul className="flex justify-between md:justify-around p-3 text-white">
        {sections.map(({ icon: Icon, to }) => (
          <li
            key={to}
            className="cursor-pointer hover:text-[#a176ff] transition-colors duration-200"
          >
            <Link
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-200"
              activeClass="text-[#a176ff] border-b-2 border-[#a176ff]"
            >
              <Icon size={24} stroke={1.5} className='hover:text-[#a176ff]' />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionLinks;