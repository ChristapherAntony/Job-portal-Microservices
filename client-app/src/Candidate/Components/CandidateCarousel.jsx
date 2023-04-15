import React, { useEffect, useRef } from 'react';
import { Carousel1, Carousel2 } from '../assets/images';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

function CandidateCarousel() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper(carouselRef.current, {
            loop: true,
            autoplay: {
                delay: 2000, // change the image every 5 seconds
                disableOnInteraction: false // allow the user to interact with the carousel
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }, []);


    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="slide" ref={carouselRef}>
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96 swiper-container">
                    {/* Item 1 */}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={Carousel1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 2 */}
                        <div className="swiper-slide">
                            <img src={Carousel2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>

                    <div className="swiper-pagination" />

                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </div>
            </div>



            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                          src={Carousel1}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                           src={Carousel2}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 3 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                          src={Carousel1}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 4 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src={Carousel2}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 5 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                          src={Carousel1}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to={0}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to={1}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to={2}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 4"
                        data-carousel-slide-to={3}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 5"
                        data-carousel-slide-to={4}
                    />
                </div>
                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next=""
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    );
}

export default CandidateCarousel;
