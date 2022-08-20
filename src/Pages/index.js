import React from 'react'
import Hero from '../components/Hero'
import { HeroData } from '../Data/HeroData'

const Home = ({id}) => {
 
    return (
        <>
          <Hero id={id} slides={ HeroData }/>  
          
        </>
    )
}

export default Home
