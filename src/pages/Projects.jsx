import React from 'react'
import mail from '../assets/standard.png'
import spotify from '../assets/Spotify.png'
import FoxRab from '../assets/FoxesandRabbits.png'


const Projects = () => {

  return (
    <div >
    <div id="Mail" className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center text-white'>
        <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-20'>My Projects</h1>
        <h2 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-20  underline '>Professional Experience</h2>
        
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 sm:py-0 '>
            <img className='w-[500px] mx-auto my-4 ' src={mail} alt="/"></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Freelance</p>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Custom Ecommerce Web Solution</h1>
                <p>Yuh I make the website and shit</p>

                <h2 className='md:text-2xl sm:xl font-bold py-2 text-[#00df9a]'>Technologies</h2>
                <div>
                <p>ReactJS</p>
                <p>Python Django</p>
                <p>PostgreSql</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>AWS</p>
                <p>Rest API</p>
                </div>
            </div>
      </div>
      
    </div>
    
    <div id="Spotify" className='w-full bg-white py-16 px-4'>  
        <h1 className='text-center flex flex-col justify-center md:text-5xl sm:text-4xl text-3xl font-bold md:py-20 underline '>Academic Experience</h1>
        <div className='max-w-[1240px] py-4 mx-auto grid md:grid-cols-2 '>
    
            <img className='w-[500px]  mx-auto my-4' src={spotify} alt="/"></img>
            <div className='flex flex-col justify-center'>
            
                <p className='text-[#00df9a] uppercase font-bold'>Capstone Project</p>
                <h1 className=' md:text-4xl sm:3xl text-2xl font-bold py-2'>Music Recommendation Web Application</h1>
                <p className=''>Yuh I make the website and shit</p>

                <h2 className='md:text-2xl sm:xl font-bold py-2 '>Technologies</h2>
                <div> 
                <p>Python Django</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Rest API</p>
                </div>
            </div>
      </div>
      
    </div>
    

    <div id="Fox" className='w-full  py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={FoxRab} alt="/"></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Academic Project</p>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2 text-white'>Foxes and Rabbits Simulation</h1>
                <p className='text-white'>The foxes eat the rabbits and shit</p>

                <h2 className='md:text-2xl sm:xl font-bold py-2 text-[#00df9a]'>Technologies</h2>
                <div className='text-white'>
                <p>Java</p>
                </div>
            </div>
      </div>
      
    </div>
    <div id="Box"className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={mail} alt="/"></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Academic Project</p>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Box Production Model</h1>
                <p>Simulate making the boxes and shit and then provide analysis</p>

                <h2 className='md:text-2xl sm:xl font-bold py-2'>Technologies</h2>
                <div>
                <p>Java</p>
                <p>Microsoft Excel</p>
                </div>
            </div>
      </div>
      
    </div>
    
    </div>
  )
}

export default Projects
