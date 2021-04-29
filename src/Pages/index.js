import React from 'react'
import Hero from '../components/Hero'
import { HeroData } from '../Data/HeroData'

const Home = () => {
    return (
        <>
          <Hero hero={ HeroData }/>  
        </>
    )
}

export default Home
