import React from 'react'
import picture from '../assets/Picture.jpg'
import{FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";


const About = () => {
  return (
    <div id='Top' className='pb-40 '>


    <div className='max-w-[800px]  w-full  h-auto  mx-auto text-center flex flex-col py-5'>
      <p className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>About Erik </p>
      <img className='w-[500px] mx-auto my-4 shadow rounded-full' src={[picture]} alt="/"></img>
      <div className='text-gray-300 md:text-xl py-5' >
          <p className='py-4'>Hello! My name is Erik, and I currently reside and work in Neshanic Station, New Jersey. Currently my focus centers on constructing and enhancing websites for businesses, helping them establish a robust digital presence.</p>
          <p>
I am a Results-driven Full Stack Software Developer specializing in JavaScript, ReactJS, and Python Django. With a Proven track record of successfully delivering end-to-end solutions,
 including the development and deployment of a secure E-Commerce store that drove a 30% boost in revenue. Adept at collaborating with clients to understand product requirements and design alternatives, 
 ensuring alignment with business goals. Experienced in Agile Development and Scrum methodologies, with a strong foundation in object-oriented programming, algorithms, and data structures. 
 Skilled in fostering brand awareness through the creation of innovative web applications and proficient in optimizing product performance and user experience.
  
        </p>
        <p className='py-4'>Effective communicator and collaborator, 
 capable of orchestrating seamless operations in fast-paced, high-stress environments. Seeking opportunities to contribute technical expertise and drive impactful solutions in a dynamic and collaborative team environment.</p>
      </div>
    </div>

<div className='max-w-[800px]  w-full h-auto mx-auto text-center flex flex-col justify-center'>
    <div className=' md:text-5xl sm:text-4xl text-2xl font-bold py-8 text-gray-300 bg-gray-900'> 
              <p className='md:py-10  py-5font-bold'>Erik Schultz</p>
              <p className='md:py-10 py-5'>Full Stack Software Developer</p>
              <p className='md:text-3xl sm:text-2xl text-lg'>Neshanic Station, NJ</p>
              <div className='flex text-center justify-center p-10'>
                <a className='rounded outline 'href='mailto:erikschultz711@gmail.com' target='_blank' rel="noreferrer"> <IoIosMail size={100}/> </a>
                <a className='pl-2'href='https://www.linkedin.com/in/erik-schultz-97b525232/' target='_blank' rel="noreferrer"> <FaLinkedin size={100}/> </a>
                <a href='https://github.com/ErikWSchultz' target='_blank' rel="noreferrer"> <FaGithubSquare size={100}/> </a>
              </div>
        </div>
        </div>
    </div>
  )
}

export default About
