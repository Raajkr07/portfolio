import React from 'react';
import { IconHeartbeat } from '@tabler/icons-react';
import Image from '../../assets/Avatar.png';
import GlowingBackground from '../backgroundAnimation/GlowingBackground';

export default function HeroSection({ onToggleSidebar, sidebarCollapsed, innerRef }) {
  return (
    <section ref={innerRef} id="hero" className="relative w-full mb-10 pr-4 pl-10 pt-10 overflow-y-auto">
      <div className="flex flex-col items-start justify-start max-w-5xl mx-auto space-y-12">

        <div className="relative flex flex-row items-center w-full gap-10 sm:gap-16">
          {/* SVG Arrow */}
          <svg
            className="absolute left-20 top-0"
            width="140"
            height="80"
            viewBox="0 0 140 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ pointerEvents: 'none' }}
          >
            <path
              d="M120,35 Q30,10 25,70"
              stroke="#b496ff"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L8,4 L0,8" fill="#b496ff" />
              </marker>
            </defs>
          </svg>

          <p className="text-lg ml-52 sm:text-xl font-main font-light text-white">
            Hi! I'm <span className="text-[#a176ff] text-5xl">Raaj Kumar</span>
          </p>
        </div>

        {/* Avatar and Intro Section */}
        <div className="flex flex-row items-start w-full gap-8 sm:gap-16">
          {/* Avatar */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            <GlowingBackground zIndex={-1} />
            <img
              src={Image}
              alt="Raj Kumar"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center flex-1 text-left">
            <p className="text-base sm:text-lg font-main font-light text-white/80 underline mb-2">
              A Developer who
            </p>
            <h1 className="text-4xl sm:text-5xl font-main font-bold text-white leading-tight mb-3">
              Judges a book<br />
              by it's{' '}
              <span className="relative inline-block text-[#a176ff]">
                cover
              </span>
              ...
            </h1>
            <p className="text-sm sm:text-base font-main font-light text-white/70 max-w-md">
              Because if the cover does not impress you, what else can?
            </p>
          </div>
        </div>

        {/* Software Engineer / HopeMeds Section */}
        <div className="w-full text-left">
          <h2 className="text-3xl sm:text-4xl font-main font-bold text-white mb-2">
            I&apos;m a Full Stack Developer.
            <span className="animate-blink">|</span>
          </h2>

          <p className="text-base mb-5 font-main sm:text-lg font-light text-white/85 leading-relaxed">
            basically, self-taught Full Stack Developer with over 1+ year of experience in building projects. <br />
            I create software products that is useful and enjoyable, balancing what users need with what businesses wants.
          </p>

          <div className="flex flex-wrap font-main items-center gap-2 mb-4">
            <span className="text-lg sm:text-xl text-white/80">
              Currently, I'm trying to build
            </span>
            <button
              type="button"
              onClick={onToggleSidebar}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              className="flex items-center gap-2 px-3 py-2 bg-primary-900/20 rounded-lg hover:bg-primary-900/40 transition"
            >
              <IconHeartbeat size={32} stroke={2.2} className="text-[#a176ff] animate-pulse" />
              <span className="font-heading text-2xl font-semibold tracking-tight text-[#a176ff] select-none no-underline blinking-logo">
                <a href="https://hopemeds.netlify.app/" className='hover:underline'>
                  HopeMeds
                </a>
              </span>
            </button>
          </div>
        </div>

        
      </div>

      {/* Blinking cursor animation */}
      <style>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { visibility: hidden; }
        }
      `}</style>
    </section>
  );
}
