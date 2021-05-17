import React, { useEffect, useState, useRef } from 'react';
import {
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,
    Arrow,
    SliderButtons,
    PrevArrow,
    NextArrow

}
from './HeroElements'
import {  AnimatePresence } from 'framer-motion'
import { Button } from '../Button/index';

const Hero = ({ slides }) => {
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
             <HeroWrapper>
                 <AnimatePresence>
                     {slides.map((slide, index) => {
                         return (
                            <HeroSlide key={index}>
                            {index === current && (
                             <HeroSlider>
                             <HeroImage src={slides.image} 
                             alt={slides.alt}
                             initial='hidden'
                             animate='visible'
                             exit='exit'
                             variants={fadeAnimation}
                              />
                             <HeroContent>
                                <h1 data-aos='fade-down' data-aos-duration='600'>{slides.title}</h1>
                                <Button
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-delay='250'
                                to={slide.path}
                                primary='true'
                                css={`
                                  max-width: 160px;
                                `}
                                >
                                    {slide.label}
                                    <Arrow />
                                </Button>
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
