    import React from 'react'
    import Image from 'next/image';
    const content5p1 = () => {
      return (
        <div className='bg-white flex flex-col md:flex-row mt-50 gap-30 md:mx-40 rounded-xl'>
          <div className='flex flex-col ml-15'>
            <Image
              src="/Screenshot 2025-06-01 120433.png"
              alt="Project showcase"
              width={1300}
              height={1500}
              className="rounded-lg mt-5 mr-4 hidden md:flex"
            />
        <h1 className='font-bold sm:text-5xl  text-4xl my-7 '>How to join our community</h1>
      <p>Just 3 simple steps to optimize your company operations.</p>
     <button className="btn btn-sm sm:btn-sm bg-[#2f63f1] text-white w-30 h-12 rounded-xl cursor-pointer hover:bg-gray-500 md:my-9 mt-9">Sign up now</button>
          </div>
          <div className='flex flex-col md:mt-25 sm:mr-40 gap-5 sm:gap-15 mx-20'>
            <ul><h2 className='text-3xl sm:my-5'>step 1</h2>
            <p>Reach out to one of our specialists, and have short introduction session.</p>
            </ul>
            
             <ul className='border-t border-gray-400'><h2 className='my-5 text-3xl'>step 2</h2>
            <p>Our specialist will prepare personalized package suitable for your needs.</p>
            </ul>
             <ul className='border-t border-gray-400'><h2 className='my-5 text-3xl'>step 3</h2>
            <p className='mb-5'>Poof! You are ready to work smart with optimized operations.</p>
            </ul>
          </div>
        </div>
      )
    }
    
    export default content5p1
    