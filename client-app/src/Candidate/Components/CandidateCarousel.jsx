import React, { useState, useEffect } from 'react';
import { Carousel1, Carousel2, Carousel3 } from '../assets/images';

const images = [
    { src: Carousel1, heading: 'Lorem ipsum dolor sit amet consectetur' },
    { src: Carousel2, heading: 'Libero adipisci et recusandae natus, maiores quod dicta' },
    { src: Carousel3, heading: 'Voluptate porro eum praesentium amet ullam excepturi' },
];
function CandidateCarousel() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setIndex((index + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="absolute top-24 lg:top-40 left-0 w-full h-full flex items-center justify-center z-10">
                <h1 className="text-lightDarkBlue text-base lg:text-3xl font-bold">
                    {images[index].heading}
                </h1>
            </div>
            <div className="overflow-hidden w-full">
                <img
                    className="absolute h-full w-full object-cover transform transition-all duration-5000 ease-in-out"
                    src={images[index].src}
                    alt="carousel"
                />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex">
                <button
                    className="rounded-full bg-opacity-50 hover:bg-opacity-75 focus:outline-none px-3 py-2"
                    onClick={handlePrev}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex">
                <button
                    className="rounded-full bg-opacity-50 hover:bg-opacity-75 focus:outline-none px-3 py-2"
                    onClick={handleNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>
        </div>
    );

}

export default CandidateCarousel;
