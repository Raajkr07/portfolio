import React from 'react'
import LineImage from '../../../assets/LineImage.png';

const ImageSection = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full py-6 sm:pr-44">
            <img
                src={LineImage}
                alt="Raj Kumar"
                className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-xl"
            />
            <p className="font-main font-bold 
                text-4xl                 /* very small phones */
                sm:text-6xl              /* small phones & larger */
                md:text-[3rem]         /* tablets (iPad) */
                lg:text-[4rem]           /* laptops/desktops */
                xl:text-[5rem]           /* large desktops */
                2xl:text-[7rem]          /* very large screens */
                leading-tight
                sm:leading-[1.2]
                md:leading-[1.25]
                lg:leading-[1.3]
                py-6 sm:py-8
                max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%]
                text-center sm:text-left
                bg-gradient-to-r from-[#5f319f] via-[#a529a1] to-[#ad4479]
                bg-clip-text text-transparent
                wave-text bg-[length:400%_400%]"
            >
                Sayonara!
                <span className="absolute left-0 bottom-0 w-full h-1 bg-[#a529a1]"></span>
            </p>

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
