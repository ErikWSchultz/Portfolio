import React from 'react'
import { HashLink } from 'react-router-hash-link';
import{FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 relative mt-1'>
        <div>
            <HashLink to='/#top'><h1 className='w-full text-3xl font-bold text-[#00df9a]'>Erik Schultz</h1></HashLink>
            <p className='py-4'>Erik Schultz is a dynamic Full Stack Software Developer with a strong foundation in Computer Science, graduating from Rowan University. His freelance expertise encompasses JavaScript, ReactJS, Python Django, PostgreSQL, Bootstrap, Azure, and JWT Auth. </p>
            <div className='flex md:w-[75%] my-6 '> 
            <a href='https://www.linkedin.com/in/erik-schultz-97b525232/' target='_blank' rel="noreferrer"> <FaLinkedin size={30}/> </a>
            <a href='https://github.com/ErikWSchultz' target='_blank' rel="noreferrer"> <FaGithubSquare size={30}/> </a>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className = 'p-4 font-medium text-gray-400'> <HashLink to={`/#top`}>Home</HashLink></h6>
            </div>
           <div>
             <h6 className = 'p-4 font-medium text-gray-400'> <HashLink to={`/about#Top`}>About</HashLink></h6>
            </div>
            <div>
            <h6 className = 'p-4 font-medium text-gray-400'> <HashLink to={`/projects#Mail`}>Projects</HashLink></h6>
                
            </div>
            <div>
            <h6 className = 'p-4 font-medium text-gray-400'> <HashLink to={`/resume#top`}>Resume</HashLink></h6>
            </div>
            
            
        </div>
    </div>
  )
}

export default Footer
