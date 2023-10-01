import React from 'react'
import{FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import Resume from '../assets/ErikSchultzcv.pdf'
const Contact = () => {
    
  return (
    
    <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
       
      <h1 className='text-[#00df9a] font-bold p-2'>Contact</h1>
      <a className='text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6' href = {Resume} target="_blank" rel="noreferrer" >Resume</a>
        <div className='flex text-center justify-center md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-300 '> 
              <a href='https://www.linkedin.com/in/erik-schultz-97b525232/' target='_blank' rel="noreferrer"> <FaLinkedin size={100}/> </a>
              <a href='https://github.com/ErikWSchultz' target='_blank' rel="noreferrer"> <FaGithubSquare size={100}/> </a>
        </div>
    </div>
  )
}

export default Contact
