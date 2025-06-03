import React from 'react'

const content1 = () => {
  return (
    <div className='mt-25'>
      <h1 className='text-center text-4xl mb-4'>Pricing</h1>
      <p className='text-center'>Our pricing is not expensive, but it's not<br /> cheap either, it's exactly what it should be</p>
      <div className='flex flex-col md:flex-row md:mx-71 mx-7 sm:mx-60'>
        <div className='bg-white h-75 w-80 mt-15 rounded-2xl hover:bg-gray-400'>
            <p className='font-bold m-5'>Basic</p>
<div className="inline-flex items-start  rounded-lg  px-6 py-4 ">
      <span className="text-2xl font-bold text-gray-900">$</span>
      <span className="text-6xl font-bold text-gray-900 mx-1">9</span>
      <span className="text-lg text-gray-600 font-medium self-end">/month</span>
    </div>
                <p className='mx-5'>For individuals and small teams</p>
           <button className="btn btn-sm sm:btn-sm w-70 h-12 rounded-xl bg-[#efefef] text-black border-1 cursor-pointer hover:bg-gray-300 justify-center mx-5 mt-16">Try now</button>

        </div>
        <div className='bg-white h-90 w-80 mt-5 shadow shadow-gray-400 rounded-2xl hover:bg-gray-400'>
          <p className='bg-[#2f63f1] text-white mt-4 ml-40 w-35 text-center rounded-xl h-7'>Most Popular</p>
           <p className='font-bold m-5'>Pro</p>
      <div className="inline-flex items-start  rounded-lg  px-6 py-4 ">
      <span className="text-2xl font-bold text-gray-900">$</span>
      <span className="text-6xl font-bold text-gray-900 mx-1">19</span>
      <span className="text-lg text-gray-600 font-medium self-end">/month</span>
    </div>
                <p className='mx-5'>For startups and growing businesses</p>
           <button className="btn btn-sm sm:btn-sm w-70 h-12 rounded-xl bg-[#efefef] text-black border-1 cursor-pointer hover:bg-gray-300 justify-center mx-5 mt-10">Get Started with Pro</button>

        </div>
        <div className='bg-white h-75 w-80 mt-5 sm:mt-15 rounded-2xl hover:bg-gray-400'>
           <p className='font-bold m-5'>Business</p>
      <div className="inline-flex items-start  rounded-lg  px-6 py-4 ">
      <span className="text-2xl font-bold text-gray-900">$</span>
      <span className="text-6xl font-bold text-gray-900 mx-1">99</span>
      <span className="text-lg text-gray-600 font-medium self-end">/month</span>
    </div>
                <p className='mx-5'>For organizations with advanced needs</p>
           <button className="btn btn-sm sm:btn-sm w-70 h-12 rounded-xl bg-[#efefef] text-black border-1 cursor-pointer hover:bg-gray-300 justify-center mx-5 mt-10">Get Started with Business</button>

        </div>


      </div>
    </div>
  )
}

export default content1
