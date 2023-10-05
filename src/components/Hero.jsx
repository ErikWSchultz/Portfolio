import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center' >
            <p className='text-[#00df9a] font-bold p-2'>Portfolio</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Erik Schultz
            </h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                    Full Stack Software Engineer
                </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Solving Visions with Exceptional Web Experiences</p>
            <HashLink smooth to='/About#Top'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>About Me</button></HashLink>
        </div>
      
    </div>
  )
}

export default Hero
