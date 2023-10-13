import React from 'react'
import{FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { IoIosMail } from "react-icons/io"; 
import {BsFiletypePdf} from 'react-icons/bs'
import Resume from '../assets/SchultzResumeLI.pdf'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='text-center  sm:text-left md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Let's Connect!</h1>
            <p className='text-[#00df9a]'>Explore my Socials or click the PDF for a copy of my Resume.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <a className='text-white pb-4' href = {Resume} target="_blank" rel="noreferrer"><BsFiletypePdf size={100}/></a>
               
                <a className='rounded outline'href='mailto:erikschultz711@gmail.com' target='_blank' rel="noreferrer"> <IoIosMail size={100}/> </a>
                <a className='pt-2 sm:pl-2'href='https://www.linkedin.com/in/erik-schultz-97b525232/' target='_blank' rel="noreferrer"> <FaLinkedin size={100}/> </a>
                <a href='https://github.com/ErikWSchultz' target='_blank' rel="noreferrer"> <FaGithubSquare size={100}/> </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
