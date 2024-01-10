import React from 'react'
import mail from '../assets/standard.png'
import spotify from '../assets/Spotify.png'
import FoxRab from '../assets/FoxesandRabbits.png'
import box from '../assets/BoxSimulationSlides.png'
import {AiOutlineHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi' 
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoDjango} from 'react-icons/bi'
import {BiLogoPostgresql} from 'react-icons/bi'
import {BiLogoJava} from 'react-icons/bi'
import {AiOutlineApi} from 'react-icons/ai'
import {SiMicrosoftazure} from 'react-icons/si'
import {AiOutlineFileExcel} from 'react-icons/ai'


const Projects = () => {

  return (
    <div >
     
      <div id="Mail" className=' text-center '>
        <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold pt-10'>My Projects</h1>
        <h2 className='md:text-5xl sm:text-4xl text-3xl font-bold underline text-white pt-8 sm:pb-[40px]'>Professional Experience</h2>

   <div  className='w-full text-center flex flex-col justify-center py-16 px-4 text-white sm:py-auto'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div>
            <img className='w-[500px] mx-auto my-4 ' src={mail} alt="/"></img>
            <p className='text-white'>'Temporary Image'</p>
        </div>
        
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Freelance</p>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Custom Ecommerce Web Solution</h1>
                <p className='py-2'> Alongside facilitating sprint reviews and meticulous documentation adjustments, 
                   I spearheaded the end-to-end development of an E-Commerce store. This encompassed deploying robust features such as secure transactions, 
                   JSON Web Token Authentication, and a RESTful API, resulting in an impressive 30% revenue surge in the initial quarter. Additionally,
                    I implemented an Administrative portal designed for efficient creation, tracking, and updating of products and orders. This portal also featured insightful statistical displays, 
                    offering a comprehensive overview of product performance and overall activity.</p>

                <h2 className='md:text-2xl sm:xl font-bold py-2 text-[#00df9a]'>Technologies</h2>
                <div>
                  <ul className='font-bold flex flex-col md:pb-5'>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                  <span className="text-center">React</span>
                        <BiLogoReact size={20}/>
                       
                  </li>
                  
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                  <span className="text-center">Python Django</span>
                        <BiLogoDjango size={20}/>
                        
                  </li>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                  <span className="text-center">PostgreSql</span>
                        <BiLogoPostgresql size={20}/>
                        
                  </li>
                <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                <span className="text-center">HTML</span>
                        <AiOutlineHtml5 size={20}/>
                       
                  </li>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                  <span className="text-center">CSS</span>
                        <BiLogoCss3 size={20}/>
                        
                  </li>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                  <span className="text-center">Microsoft Azure</span>
                        <SiMicrosoftazure size={20}/>
                        
                  </li>
                <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                <span className="text-center">REST API</span>
                        <AiOutlineApi size={20}/>
                  </li>
                </ul>
                </div>
            </div>
      </div>
      
    </div>
    </div>
    
    <div id="Spotify" className=' w-full text-center flex flex-col justify-center bg-white py-16 px-4'>  
        <h1 className='text-center flex flex-col justify-center md:text-5xl sm:text-4xl text-3xl font-bold md:py-20 underline '>Academic Experience</h1>
        <div className='max-w-[1240px] py-4 mx-auto grid md:grid-cols-2 '>
            <div>
            <img className='w-[500px]  mx-auto my-4' src={spotify} alt="/"></img>
            <p className='text-center'>'Temporary Image'</p>
            </div>
            <div className='flex flex-col justify-center'>
            
                <p className='text-[#00df9a] uppercase font-bold'>Capstone Project</p>
                <h1 className=' md:text-4xl sm:3xl text-2xl font-bold py-2'>Music Recommendation Web Application</h1>
                <p className=''>Leveraging Python and the Spotify Web API, I engineered a dynamic web application aimed at enriching user experiences by recommending new songs. This comprehensive platform not only expanded search functionalities but also seamlessly integrated social media elements. Simultaneously, I took charge of constructing meticulous documentation covering design, implementation, and testing processes. My commitment extended to producing clean, well-documented code, fostering optimized efficiency within a collaborative Scrum team comprising seven members.</p>

                <h2 className='md:text-2xl sm:xl font-bold '>Technologies   </h2>
                <ul className='font-bold text-center py-2'> 
                <li  className=" flex items-center justify-center glassy-screen ">
                  <span className="text-center">Python Django</span>
                        <BiLogoDjango size={20}/>
                        
                  </li>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                <span className="text-center">HTML</span>
                        <AiOutlineHtml5 size={20}/>
                       
                  </li>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                  <span className="text-center">CSS</span>
                        <BiLogoCss3 size={20}/>
                        
                  </li>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                <span className="text-center">REST API</span>
                        <AiOutlineApi size={20}/>
                  </li>
                </ul>
            </div>
      </div>
      
    </div>
    

    <div id="Fox" className='w-full text-center flex flex-col justify-center py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={FoxRab} alt="/"></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Academic Project</p>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2 text-white'>Foxes and Rabbits Simulation</h1>
                <p className='text-white'>Crafted a dynamic predator-prey model capturing the nuanced ebb and flow of population dynamics tied to factors like food availability and spatial constraints. To enhance modularity, I adeptly decoupled objects from the simulation framework, enabling users to seamlessly introduce new relationships. This innovation extended to the user interface, where I implemented a Graphical User Interface (GUI) to visually depict the relationships. Users gained control over the simulation's temporal scope, with the flexibility to define lengths spanning from a concise 1-turn exploration to an extensive 10,000-turn analysis.</p>

                <h2 className='md:text-2xl sm:xl font-bold py-2 text-[#00df9a]'>Technologies</h2>
                <div className='text-white'>
                <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                <span className="text-center">Java</span>
                        <BiLogoJava size={20}/>
                  </li>
                </div>
            </div>
      </div>
      
    </div>
    <div id="Box"className='w-full text-center flex flex-col justify-center bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={box} alt="/"></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Academic Project</p>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Box Production Model</h1>
                <p>Modeled the intricate production process of a box manufacturing plant by leveraging 500 points of initial data, encompassing 5 identifiers and 23 variables meticulously collected over a robust 6-month timeframe. To enhance realism and broaden the project's scope, I adeptly implemented jockeying maneuvers across multiple machines, mirroring the complexities of actual working conditions within a sizable manufacturing plant. The culmination of this effort involved a thorough analysis of the simulated data, enabling the extraction of probabilities associated with the completion of a specific number of jobs within a given timeframe. This insightful analysis effectively gauged the limits of productivity in an average workday scenario.</p>

                <h2 className='md:text-2xl sm:xl font-bold py-2'>Technologies</h2>
                <ul>
                <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                <span className="text-center">Java</span>
                        <BiLogoJava size={20}/>
                  </li>
                  <li  className=" flex items-center justify-center gap-2 glassy-screen ">
                <span className="text-center">Microsoft Excel</span>
                        <AiOutlineFileExcel size={20}/>
                  </li>
                </ul>
            </div>
      </div>
      
    </div>
    
    </div>
  )
}

export default Projects
