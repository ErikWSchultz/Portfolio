import React from 'react'
import { HashLink } from 'react-router-hash-link';
import mail from '../assets/standard.png'
import spotify from '../assets/Spotify.png'
import FoxRab from '../assets/FoxesandRabbits.png'



const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={spotify} alt='/'></img>
                <h2 className='text-2xl font-bold text-center py-8'>Academic</h2>
                <p className='text-center text-4xl font-bold'>Music Recommendation Web Application</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Use the Spotify API to Recommend new Songs</p>
                    <p className='py-2 border-b mx-8'>Python Django, HTML, CSS</p>
                    
                </div>
                <HashLink smooth className='text-center' to='/Projects#Spotify'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Learn More</button></HashLink>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={mail} alt='/'></img>
                <h2 className='text-2xl font-bold text-center py-8'>Freelance</h2>
                <p className='text-center text-4xl font-bold'>Custom Eccommerce Store</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Ecommerce store with RESTful API, secure transactions, Community Lookup, Admin Portal for Analytics</p>
                    <p className='py-2 border-b mx-8'>ReactJS, Python Django, HTML, CSS, PostgreSQL, Azure</p>
                </div>
                <HashLink smooth className='text-center' to='/Projects#Mail'><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a]'>Learn More</button></HashLink>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={FoxRab} alt='/'></img>
                <h2 className='text-2xl font-bold text-center py-8'>Academic</h2>
                <p className='text-center text-4xl font-bold'>Foxes and Rabbits Simulations</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Simulate a Pretador Prey relationship over User Defined length of time</p>
                    <p className='py-2 border-b mx-8'>Java</p>
                </div>
                <HashLink smooth className='text-center' to='/Projects#Fox'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Learn More</button></HashLink>
            </div>
        </div>
    </div>
  )
}

export default Cards
