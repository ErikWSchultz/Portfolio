import React from 'react'
import{FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import Resume from '../assets/ErikSchultzResume2023.pdf'
import Skills from '../components/TechnicalSkills'
import SoftSkills from '../components/SoftSkills';
const Contact = () => {
    
  return (
    
    <div id='top' className='max-w-[800px]  w-full h-auto mx-auto text-center flex flex-col justify-center'>
       <div className='text-center flex flex-col justify-center '>
      <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl pt-6 md:py-6 font-bold :p-2  text-center flex flex-col justify-center'>Resume</h1>
      <h2 className='text-gray-300 font-bold md:text-xl'>If you wish to have a copy of my resume, please click below.</h2>

      <div className='py-6'>
      <a className='text-white md:text-2xl sm:text-xl text-l font-bold p-3 rounded-lg bg-[#00df9a] ' href = {Resume} target="_blank" rel="noreferrer" >View Resume (PDF)</a>
      </div>


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
        <div className='text-center flex flex-col justify-center '>
        <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl pt-6 md:py-6 font-bold :p-2  text-center flex flex-col justify-center'>Soft Skills</h1>
        <SoftSkills></SoftSkills>
        <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl pt-6 md:py-6 font-bold :p-2  text-center flex flex-col justify-center'>Technical Skills</h1>
        <Skills></Skills>
        </div>
    </div>
  )
}

export default Contact
