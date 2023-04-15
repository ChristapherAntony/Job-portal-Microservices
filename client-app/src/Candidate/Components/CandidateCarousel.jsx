
import { Carousel1, Carousel2 } from '../assets/images'
import React, { useState } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';


const images = [Carousel1, Carousel2];

function CandidateCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="relative h-[400px]">
      <div className="overflow-hidden w-full">
        <img
          className="absolute h-full w-full object-cover transform transition duration-500 ease-in-out"
          src={images[index]}
          alt="carousel"
        />
        <p>images[index]</p>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex">
        <button
          className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none px-3 py-2"
          onClick={handlePrev}
        >
          {/* <ChevronLeftIcon className="h-6 w-6 text-gray-800" /> */}
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex">
        <button
          className="rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 focus:outline-none px-3 py-2"
          onClick={handleNext}
        > 
          {/* <ChevronRightIcon className="h-6 w-6 text-gray-800" /> */}
        </button>
      </div>
    </div>
  );
}

export default CandidateCarousel;
