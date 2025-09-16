import React from 'react'
import LineImage from '../../../assets/LineImage.png';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = ["Sayonara!", "C U Soon!", "फिर मिलेंगे!"];

const ImageSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full pt-20 pb-6 sm:pr-44">
            <img
                src={LineImage}
                alt="Raj Kumar"
                className="
                w-full sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]
                max-w-[90%] sm:max-w-none
                rounded-xl sm:mx-0"
            />
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="font-main font-bold 
            text-4xl sm:text-6xl md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[7rem]
            leading-tight sm:leading-[1.2] md:leading-[1.25] lg:leading-[1.3]
            py-6 sm:py-8
            w-full sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%]
            text-center sm:text-left
            bg-gradient-to-r from-[#5f319f] via-[#a529a1] to-[#ad4479]
            bg-clip-text text-transparent
            wave-text bg-[length:400%_400%]
            relative"
                >
                    {messages[index]}
                    <span className="hidden sm:block absolute left-0 bottom-0 w-full h-1 bg-[#a529a1]"></span>
                </motion.p>
            </AnimatePresence>


            <style>{`
                @keyframes wave {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .wave-text {
                    animation: wave 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ImageSection;
