import React from 'react'
import Image from 'next/image';

const content2p1 = () => {
  return (
    <div className='bg-white flex flex-col md:flex-row mt-15 md:mt-50 md:gap-60 md:mx-40 rounded-xl'>
        <div className='flex flex-col mt-25 ml-10 mb-25'>
      <h1 className='font-bold sm:text-5xl md:text-5xl text-4xl my-5 '>Introducing good solution</h1>
      <p>Join our community and experience the benefits today!</p>
     <button className="btn btn-sm  bg-[#2f63f1] text-white w-30 h-12 rounded-xl cursor-pointer hover:bg-gray-500 sm:mt-3 mt-10">Try for free</button>

    </div>
    <div>
<Image
  src="/Screenshot 2025-06-01 120433.png"
  alt="Project showcase"
  width={1300}
  height={1500}
  className="rounded-lg md:mt-5 mr-4"
/>
    </div>
    </div>
  )
}

export default content2p1
