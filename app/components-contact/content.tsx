import React from 'react'
import Image from 'next/image'
const content = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-10 '>
        <div>
            <Image
                  src="/Screenshot 2025-05-31 191436.png"
                  alt="Project showcase"
                  width={500}
                  height={500}
                  className="rounded-lg mt-5  sm:mr-35 md:ml-25 sm:mt-10"
                />
        </div>
      <div className='flex flex-col justify-center items-center mt-10 ml-10 mr-10 text-black'>
        <h1 className='text-3xl text-left mb-3'>Contact Us</h1>
        <p>Explore the future with us. Feel free to get in touch.</p>
        <fieldset className="fieldset bg-[#efefef]  text-black rounded-box w-xs  p-4">
            <label className="label">Message</label>

  <input type="Name" className="input text-black bg-white" placeholder="Full Name" />
  <label className="label">Email</label>
  <input type="email" className="input text-black bg-white" placeholder="Email" />

  <label className="label">Name</label>

  <input type="text" className="input text-black bg-white" placeholder="How can we get better ?" />

  <button className="btn  mt-4 bg-[#2f63f1] hover:bg-gray-500 ">Send message</button>
</fieldset>
      </div>
    </div>
  )
}

export default content
