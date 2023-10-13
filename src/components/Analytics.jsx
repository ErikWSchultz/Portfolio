import React from 'react'
import { HashLink } from 'react-router-hash-link';
import mail from '../assets/Picture.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 shadow rounded-full' src={mail} alt="/"></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Erik Schultz</p>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>At a Glance</h1>
                <p>I am a computer science graduate from Rowan University, class of 2022. 
                  In the past I have worked as a customer service associate, providing high 
                  quality, knowledge based service to retail customers. Currently, I am working as a 
                  Freelance Full Stack Web Developer, using ReactJS, Python Django Rest Framework and 
                  PostgreSQL. My interests in the technical field also include Java, Object Oriented 
                  Programming, and Software Development.</p>
                  <HashLink smooth to={`/About#Top`}><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Learn More</button></HashLink>
            </div>
      </div>
    </div>
  )
}

export default Analytics
