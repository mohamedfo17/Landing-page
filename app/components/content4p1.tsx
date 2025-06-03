import React from 'react'
import Image from 'next/image';

const content4p1 = () => {
  return (
    <div className='flex flex-col md:flex-row mt-15 sm:mt-30'>
     
   
    <div className=' md:mt-25 mx-15'>
  <p className='text-[#909090] my-8'>COST SAVING</p>
      <h1 className='font-bold sm:text-4xl md:text-4xl text-3xl my-8'>Cost saving in a smart way</h1>
      <p className='my-8'>Powerful tool that helps you reduce costs and save money on your business operations. With advanced analytics and optimization algorithms, Costsaver analyzes your existing workflows and identifies areas for improvement. </p>
     <button className="btn btn-sm sm:btn-sm w-40 h-12 rounded-xl bg-[#efefef] text-black border-1 cursor-pointer hover:bg-gray-300">Try now</button>

    </div>
     <Image
      src="/Screenshot 2025-05-31 191436.png"
      alt="Project showcase"
      width={1200}
      height={1200}
      className="rounded-lg mt-5 mr-35 ml-25 hidden md:flex"
    />
  </div>

  )
}

export default content4p1
