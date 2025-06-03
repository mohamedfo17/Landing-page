import React from 'react'
import Image from 'next/image'
const content1 = () => {
    const teamMembers = [
  { name: "Hannah Mika", role: "CEO", image: "/Screenshot 2025-06-02 211825.png" },
  { name: "Daniel Peter", role: "CTO", image: "/Screenshot 2025-06-02 211815.png" },
  { name: "Lars Mikkel", role: "Head of Operations", image: "/Screenshot 2025-06-02 211805.png" },
  { name: "Denis Forner", role: "Head of Product", image: "/Screenshot 2025-06-02 211755.png" }]
  return (
    <div className='flex flex-col justify-center items-center  mx-5 my-5 md:my-15 md:mx-30 sm:mx-20'>
        <h2 className='font-bold text-3xl my-5'>About us</h2>
        <p className='text-center md:mx-90'>We offer revolutionary solution to industry problems. Join Lando community and experience the benefits of company optimization today!</p>
      <Image
            src="/Screenshot 2025-06-02 205753.png"
            alt="Project showcase"
            width={1000}
            height={1000}
            className="rounded-lg my-10 sm:mt-25 sm:mr-35 md:ml-25 sm:ml-35"
          />
          <h2 className='font-bold text-3xl my-5'>Our mission</h2>
        <p className='text-center md:mx-90'>At Lando, we are committed to providing excellent services to our customers and clients and to help them achieve the best outcomes. We believe that we can make a positive impact on our community, industry and the world. Our Lando team is dedicated to providing the best possible service and support, and we are always looking for ways to improve and innovate.</p>
          <div className="divider md:mx-50 bg-gray-400 h-0.5"></div>
         <div className='flex flex-col sm:flex-row gap-10 sm:mt-10'>
            <p className='text-4xl font-bold ml-20 mt-10 md:mt-36 md:mx-50 sm:my-25 sm:mr-30 sm:ml-20 sm:w-1/6'> Let's start working more efficiently today!</p>
            <Image
                 src="/Screenshot 2025-05-31 191436.png"
                 alt="Project showcase"
                 width={600}
                 height={600}
                 className="rounded-lg  mr-30 sm:mr-10 sm:mt-10"
               />
         </div>

         <h1 className='text-center font-bold text-3xl my-10'>Team</h1>
         <p className='text-center  text-xl'>Meet the people behind our magical product</p>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
  {teamMembers.map((member, index) => (
    <div key={index} className="flex flex-col items-center w-64 text-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 object-cover rounded-full mb-4 mt-7"
      />
      <h3 className="font-bold text-lg my-2">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default content1
