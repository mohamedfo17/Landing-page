import React from 'react'

const content6p1 = () => {
  return (
    <div className='mt-30'>
      <h1 className='text-center text-3xl'>Testimonials</h1>
      <p className='text-center'>People love what we do and we want to let your know</p>
      <div className='flex flex-col md:flex-row mt-10 gap-10 mx-15 md:mx-50 sm:mx-30'>
    <div className='text-center bg-white md:w-2/3 rounded-xl hover:shadow-lg'>
        <p className='font-bold mt-10 mx-10'>"Since implementing Lando our business has seen significant growth."</p>
        <p className='my-5 text-blue-700'>★ ★ ★ ★ ★</p>
        <p className='font-bold'>Jack Sibire</p>
        <p className='text-[#909090]'>Lead Manager, Growio</p>
    </div>
     <div className='text-center bg-white md:w-2/3 rounded-xl hover:shadow-lg '> 
        <p className='font-bold mt-10 mx-10 '>"I recommend Lando to any business looking for improvement."</p>
        <p className='my-5 text-blue-700'>★ ★ ★ ★ ★</p>
        <p className='font-bold'>Adele Mouse</p>
        <p className='text-[#909090]'>Product Manager, Mousio</p>
        </div>
    <div className='text-center bg-white md:w-2/3 h-70 rounded-xl hover:shadow-lg'>
        <p className='font-bold mt-10 mx-10'>"I can't imagine running our company without it."</p>
        <p className='mt-11 mb-5 text-blue-700'>★ ★ ★ ★ ★</p>
        <p className='font-bold'>Ben Clock</p>
        <p className='text-[#909090]'>CTO, Clockwork</p>
        </div>

      </div>
    </div>
  )
}

export default content6p1
