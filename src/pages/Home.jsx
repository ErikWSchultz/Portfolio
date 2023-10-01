import React from 'react'
import Hero from '../components/Hero'
import Analytics from '../components/Analytics';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <>
        <main id="top">
            <Hero></Hero>
            <Analytics></Analytics>
            <Newsletter></Newsletter>
            <Cards></Cards>
      </main>
    </>
  )
}

export default Home
