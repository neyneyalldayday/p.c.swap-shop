import React, { useEffect, useState, useRef } from 'react';
import {
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,  
    SliderButtons,
    PrevArrow,
    NextArrow

}
from './HeroElements'
import {  AnimatePresence } from 'framer-motion'


const Hero = ({ slides, id }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {
            const nextSlide = () => {
                setCurrent(current => (current=== length - 1 ? 0 : current + 1));
            };

            timeout.current = setTimeout(nextSlide, 3000);

            return function() {
                if (timeout.current){
                    clearTimeout(timeout.current);
                }
            }
        },
        [current, length]
    );

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);

    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current -1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const fadeAnimation = {
        hidden: { opacity: 0},
        visible: {opacity: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0 }
    }



    return (
        <>
         <HeroSection>
                <div className="border-2 md:border-t-4    justify-center  h-6  max-w-full md:max-w-screen bg-indigo-100  text-pink-300 text-sm antialiased sm:subpixel-antialiased md:antialiased font-semibold md:font-black tracking-tight md:tracking-normal">
               Your Id:<span className="text-extralight visible">{id}</span>
                </div>                                                 
             <HeroWrapper>
                 <AnimatePresence>
                     {slides.map((slide, index) => {
                         return (
                            <HeroSlide key={index}>
                            {index === current && (
                             <HeroSlider>
                             <HeroImage src={slide.image} 
                             alt={slide.alt}
                             initial='hidden'
                             animate='visible'
                             exit='exit'
                             variants={fadeAnimation}
                              />
                             <HeroContent>
                                <h1 data-aos='fade-down' data-aos-duration='600'>{slide.title}</h1>
                                
                            </HeroContent>
                     </HeroSlider>
                    )}
                         
                     </HeroSlide>
                         )
                     })}
                     
                 </AnimatePresence>
                 <SliderButtons>
                 <PrevArrow onClick={prevSlide} />
                 <NextArrow onClick={nextSlide} />
                 </SliderButtons> 
                 
             </HeroWrapper>
         </HeroSection>
        </>
    )
}

export default Hero
