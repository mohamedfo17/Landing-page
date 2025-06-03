import React from 'react'
import Image from 'next/image';

const content = () => {
  return (
    <div>
    <div className='md:mt-5 sm:mt-5  flex flex-col ml-10 md:flex-row md:gap-50 md:ml-30 sm:flex-col sm:gap-15 sm:ml-15'>
        <div className='flex flex-col mt-20'>
      <p className='text-[#909090]'>- 30 DAYS FREE TRIAL</p>
      <h1 className='font-bold sm:text-6xl md:text-6xl text-5xl my-5'>The best way to showcase your project </h1>
      <p>Here you can put description about your project</p>
      <div className='flex flex-row gap-5 mt-10'>
        <button className="btn btn-sm sm:btn-sm bg-[#2f63f1] text-white w-30 h-12 rounded-xl cursor-pointer hover:bg-gray-500">Try for free</button>
         <button className="btn btn-sm sm:btn-sm w-40 bg-[#efefef] text-black h-12 rounded-xl border-1 cursor-pointer hover:bg-gray-300">See how it works</button>
      </div>
    </div>
    <div className='sm:mr-25 mb-0 mr-5 mt-5'>
<Image
  src="/Screenshot 2025-05-31 191436.png"
  alt="Project showcase"
  width={1100}
  height={1100}
  className="rounded-lg mt-0"
/></div>

    </div>
    <p className='text-center mt-10 '>Trusted by indivudials and teams at the world's</p>
<p className='text-center mb-10'>best companies</p>
    </div>
  )
}

export default content
