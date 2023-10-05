import React from 'react'
import picture from '../assets/Picture.jpg'


const About = () => {
  return (
    <div id='Top' className='pb-40 '>


    <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col py-5'>
      <p className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>About Erik </p>
      <img className='w-[500px] mx-auto my-4' src={[picture]} alt="/"></img>
      <div className='text-gray-300 md:text-xl py-5'>
          <p className='py-2'>Hello! My name is Erik, and I currently reside and work in Neshanic Station, New Jersey. Currently my focus centers on constructing and enhancing websites for businesses, helping them establish a robust digital presence.</p>
          <p>
I am a Results-driven Full Stack Software Developer specializing in JavaScript, ReactJS, and Python Django. With a Proven track record of successfully delivering end-to-end solutions,
 including the development and deployment of a secure E-Commerce store that drove a 30% boost in revenue. Adept at collaborating with clients to understand product requirements and design alternatives, 
 ensuring alignment with business goals. Experienced in Agile Development and Scrum methodologies, with a strong foundation in object-oriented programming, algorithms, and data structures. 
 Skilled in fostering brand awareness through the creation of innovative web applications and proficient in optimizing product performance and user experience. Effective communicator and collaborator, 
 capable of orchestrating seamless operations in fast-paced, high-stress environments. Seeking opportunities to contribute technical expertise and drive impactful solutions in a dynamic and collaborative team environment.
        </p>
      </div>
    </div>


    </div>
  )
}

export default About
