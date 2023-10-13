import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link } from "react-router-dom";


const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };
    
    return(
        <div className='flex justify-betweeen items-center h-24 max-w-[1240px] mx-auto text-white px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'><Link to={`/Portfolio`}>Erik Schultz</Link></h1>
            <ul className='hidden md:flex'>
                <li className = 'p-4' > <Link to={`/Portfolio`}>Home</Link></li>
                <li className = 'p-4'> <Link to={`/about`}>About</Link></li>
                <li className = 'p-4'> <Link to={`/projects`}>Projects</Link></li>
                <li className = 'p-4'> <Link to={`/resume`}>Resume</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 ease-in-out duration-500 ' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r-gray-900 ' }>
           
                <ul className='uppercase p-4 mt-[50px]' >
                    <li className = 'p-4 border-b border-gray-600'><Link to={`/`}>Home</Link></li>
                    <li className = 'p-4 border-b border-gray-600'><Link to={`/about`}>About</Link></li>
                    <li className = 'p-4 border-b border-gray-600'><Link to={`/projects`}>Projects</Link></li>
                    <li className = 'p-4'> <Link to={`/resume`}>Resume</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;