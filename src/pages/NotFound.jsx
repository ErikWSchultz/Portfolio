import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center' >
      <h1 className='text-[#00df9a] text-4xl'> Page Not Found!</h1>
      <Link to={`/`}><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Return Home</button></Link>
    </div>
  )
}

export default NotFound
