import React from 'react'
import Image from 'next/image';

const content3p1 = () => {
  return (
    <div className='flex flex-col md:flex-row  mt-30'>
     
    <Image
      src="/Screenshot 2025-06-01 121500.png"
      alt="Project showcase"
      width={1500}
      height={1500}
      className="rounded-lg mt-5 mr-4 ml-10 hidden md:flex"
    />
    <div className='ml-15 md:mt-25 mr-15'>
  <p className='text-[#909090] my-8'>SMART SAVE</p>
      <h1 className='font-bold sm:text-4xl  text-3xl my-8'>All your work is safe with us </h1>
      <p className='my-8'>We take your data security seriously, which is why we use advanced encryption protocols to protect your files in the cloud. Your data is safe and secure with us. </p>
     <button className="btn btn-sm  w-40 h-12 rounded-xl  bg-[#efefef] text-black border-1 cursor-pointer hover:bg-gray-300">Try now</button>

    </div>
  </div>

  )
}

export default content3p1
