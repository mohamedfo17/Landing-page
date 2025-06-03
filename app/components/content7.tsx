import React from 'react'
import Image from 'next/image'
const content7 = () => {
  return (
    <div className='flex flex-col md:flex-row  mt-30 bg-white gap-0 rounded-2xl '>
         
       
        <div className=' my-8 md:mt-25 mx-20 md:ml-25'>
          <h1 className='font-bold sm:text-4xl  text-3xl my-8'>Get started with Lando today</h1>
          <p className='my-8'>Start optimizing your processes today. </p>
         <button className="btn btn-sm w-30 h-10 bg-[#2f63f1] md:w-30 md:h-12 rounded-xl text-white cursor-pointer hover:bg-gray-500 sm:w-25 sm:h-11">Sign up now</button>
    
        </div>
         <Image
          src="/Screenshot 2025-06-02 193709.png"
          alt="Project showcase"
          width={600}
          height={600}
          className="rounded-lg mt-5 mr-25 ml-25 hidden md:flex"
        />
      </div>
  )
}

export default content7
