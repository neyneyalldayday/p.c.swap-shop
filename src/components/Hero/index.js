import React from 'react'
import {
    HeroSection,
    HeroWrapper,
    HeroImage,
    HeroContent
}
from './HeroElements'

const Hero = ({hero}) => {



    return (
        <>
         <HeroSection>
             <HeroWrapper>
                 <HeroImage src={hero.image} alt={hero.alt} />
                 <HeroContent>
                    <h1>{hero.title}</h1>
                 </HeroContent>
             </HeroWrapper>
         </HeroSection>
        </>
    )
}

export default Hero
