import React from 'react';
import { IconDeviceLaptop, IconServer2, IconBrandAppstore, IconPlanet } from '@tabler/icons-react';
import GlowingBackground from './backgroundEffects/GlowingBackground';


const fields = [
    {
        title: "Frontend Development",
        description: "Creating user interfaces with React, Tailwind, and other tools.",
        icon: <IconDeviceLaptop size={50} className="text-[#a176ff]" />,
        url: "https://developer.mozilla.org/en-US/curriculum/#module-1",
    },
    {
        title: "Backend Devlopment",
        description: "Building server-side applications and APIs.",
        icon: <IconServer2 size={50} className="text-[#e3bfff]" />,
        url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
    },
    {
        title: "App Devlopment",
        description: "Making cross-platform mobile applications for Android and iOS.",
        icon: <IconBrandAppstore size={50} className="text-[#795cb2]" />,
        url: "https://docs.flutter.dev/",
    },
    {
        title: "Deployment",
        description: "Deploying apps on cloud services like AWS and Netlify.",
        icon: <IconPlanet size={50} className="text-[#a176ff]" />,
        url: "https://aws.amazon.com/getting-started/",
    },
];

const FieldSection = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-20">
            <h2 className=" font-main font-bold text-white text-4xl mb-12 underline tracking-wide">
                Field Experties
            </h2>

            <div className="relative w-full flex justify-center items-center">
                <GlowingBackground
                    zIndex={-1}
                    size={800}
                    opacity={0.53}
                    color="rgba(161,118,255,0.5)"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl relative z-10">
                    {fields.map((field, idx) => (
                        <div
                            key={field.title}
                            className="relative flex items-center p-8 rounded-xl bg-gradient-to-r from-[#130328] to-[#2D1056] hover:scale-[1.03] transition-all duration-300 border-t-4 border-[#4F228D]"
                        >
                            <div className="mr-8 flex-shrink-0">
                                {field.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{field.title}</h3>
                                <p className="text-white/80 text-base mb-4 max-w-xs">{field.description}</p>
                                <button
                                    onClick={() => window.open(field.url, '_blank', 'noopener,noreferrer')}
                                    className="px-4 py-2 rounded-md bg-[#2c1a53]/60 text-white font-main font-semibold tracking-wide border border-[#a176ff] hover:bg-[#a176ff]/20 focus:outline-none transition"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FieldSection;
