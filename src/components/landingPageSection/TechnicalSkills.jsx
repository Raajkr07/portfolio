import React from "react";
import {
    IconInfinity,
    IconBrandReact,
    IconBrandLinkedinFilled,
    IconBrandGoogleFilled,
    IconBrandSass,
    IconBrandJavascript,
    IconBrandChrome,
    IconBrandFigma,
    IconBrandAdobeXd,
    IconCode,
    IconBrandFirebase,
    IconWifi,
    IconBrandVscode,
    IconBrandPython,
    IconTrendingUp,
    IconBrandWhatsappFilled,
} from '@tabler/icons-react';
import GlowingBackground from './backgroundEffects/GlowingBackground';
import css from '../../assets/icons/css.svg';
import docker from '../../assets/icons/docker.svg';
import figma from '../../assets/icons/figma.svg';
import java from '../../assets/icons/java.svg';
import aws from '../../assets/icons/aws.svg';
import js from '../../assets/icons/js.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import mysql from '../../assets/icons/mysql.svg';
import react from '../../assets/icons/react.svg';
import redux from '../../assets/icons/redux.svg';
import spring from '../../assets/icons/spring.svg';
import tailwind from '../../assets/icons/tailwind.svg';

const iconsRow = [
    { name: "CSS", icon: css },
    { name: "Figma", icon: figma },
    { name: "Tailwind", icon: tailwind },
    { name: "JS", icon: js },
    { name: "React", icon: react },
    { name: "Redux", icon: redux },
    { name: "MYSQL", icon: mysql },
    { name: "Java", icon: java },
    { name: "Spring", icon: spring },
    { name: "AWS", icon: aws },
    { name: "Docker", icon: docker },
    { name: "MongoDB", icon: mongodb },
];

const orbitIcons = [
    { name: "LinkedIn", icon: IconBrandLinkedinFilled, x: 55, y: 435 },
    { name: "WiFi", icon: IconWifi, x: 90, y: 345 },
    { name: "JS", icon: IconBrandJavascript, x: 235, y: 450 },
    { name: "Xd", icon: IconBrandAdobeXd, x: 500, y: 415 },
    { name: "Google", icon: IconBrandGoogleFilled, x: 80, y: 320 },
    { name: "Sass", icon: IconBrandSass, x: 550, y: 355 },
    { name: "WhatsApp", icon: IconBrandWhatsappFilled, x: 550, y: 405 },
    { name: "TrendingUp", icon: IconTrendingUp, x: 350, y: 450 },
    { name: "Python", icon: IconBrandPython, x: 500, y: 360 },
    { name: "VsCode", icon: IconBrandVscode, x: 500, y: 320 },
    { name: "React", icon: IconBrandReact, x: 150, y: 450 },
    { name: "Chrome", icon: IconBrandChrome, x: 15, y: 360 },
    { name: "Figma", icon: IconBrandFigma, x: 450, y: 465 },
    { name: "Code", icon: IconCode, x: 420, y: 315 },
    { name: "Firebase", icon: IconBrandFirebase, x: 250, y: 485 },
];

export default function LandingNetwork() {
    return (
        <section className="w-full flex flex-col items-center justify-center relative overflow-visible">
            {/* Headline */}
            <h2 className="text-white text-2xl sm:text-3xl font-bold font-main text-center mt-0 mb-2">
                I'm currently looking to join a <span className="text-[#a176ff]">cross-functional</span> team.
            </h2>
            <p className="text-white/80 text-sm sm:text-base text-center font-main mb-6 mt-0">
                Here are some of the technologies and tools I work with regularly:
            </p>


            {/* Central earth with icon and orbits */}
            <div className="relative flex items-center justify-center" style={{ width: 600, height: 670 }}>
                {/* SVG lines for orbits */}
                <svg width="700" height="450" className="absolute left-0 top-40 pointer-events-none select-none">
                    <ellipse cx="300" cy="240" rx="275" ry="100" stroke="#763CAC" strokeWidth="1" fill="none" />
                    <ellipse cx="300" cy="230" rx="240" ry="90" stroke="#763CAC" strokeWidth="1" fill="none" />
                    <ellipse cx="300" cy="230" rx="220" ry="75" stroke="#763CAC" strokeWidth="1" fill="none" />
                </svg>

                {/* Orbit icons */}
                {orbitIcons.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={item.name}
                            className="absolute rounded-full flex items-center justify-center"
                            style={{
                                width: 30,
                                height: 30,
                                left: item.x,
                                top: item.y,
                            }}
                            title={item.name}
                        >
                            <IconComponent size={20} stroke={1.8} className="text-[#763CAC] opacity-70" />
                        </div>
                    );
                })}

                {/* center earth div */}
                <div
                    className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 flex"
                    style={{
                        width: 150,
                        height: 150,
                        background: "#2E1267",
                        borderRadius: "100%",
                        zIndex: 10,
                    }}
                >
                    <span className="w-full h-full flex items-center justify-center">
                        <IconInfinity
                            width={100}
                            height={100}
                            className="text-white"
                            style={{
                                filter: "drop-shadow(0 0 32px #fff) drop-shadow(0 0 16px #a176ff)",
                            }}
                        />
                    </span>
                </div>

                <div>
                    <GlowingBackground
                        zIndex={-1}
                        size={900}
                        opacity={0.35}
                        color="black"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <GlowingBackground
                        zIndex={0}
                        size={400}
                        opacity={0.9}
                        color="rgba(161,118,255,0.5)"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />

                    <div className="relative w-full h-[640px]">


                        {/* Icons Row */}
                        <div className="mb-12 relative z-10">
                            <div className="flex justify-center gap-4 mb-4">
                                {iconsRow.slice(0, 7).map((item) => (
                                    <div
                                        key={item.name}
                                        className="bg-[#251C31] rounded-full flex items-center justify-center shadow-md"
                                        style={{ width: 44, height: 44 }}
                                        title={item.name}
                                    >
                                        <img src={item.icon} alt={item.name} className="w-7 h-7" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-4">
                                {iconsRow.slice(7, 12).map((item) => (
                                    <div
                                        key={item.name}
                                        className="bg-[#251C31] rounded-full flex items-center justify-center shadow-md"
                                        style={{ width: 44, height: 44 }}
                                        title={item.name}
                                    >
                                        <img src={item.icon} alt={item.name} className="w-7 h-7" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Curved lines */}
                        <svg
                            className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2"
                            width="150"
                            height="500"
                            style={{ overflow: "visible", zIndex: 0, }}
                        >
                            <path d="M 40 200 Q 30 60 -40 0" stroke="#a176ff" strokeWidth="0.7" fill="none" opacity="0.5" />
                            <path d="M 60 200 Q 40 25 20 0" stroke="#a176ff" strokeWidth="0.7" fill="none" opacity="0.5" />
                            <path d="M 75 200 Q 70 60 70 0" stroke="#a176ff" strokeWidth="0.7" fill="none" opacity="0.5" />
                            <path d="M 95 200 Q 100 30 130 0" stroke="#a176ff" strokeWidth="0.7" fill="none" opacity="0.5" />
                            <path d="M 115 200 Q 150 20 190 0" stroke="#a176ff" strokeWidth="0.7" fill="none" opacity="0.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
