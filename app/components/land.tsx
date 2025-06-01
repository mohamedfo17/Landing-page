import React from 'react'
import Nav from './nav'
import Content from './content'


const page = () => {
  return (
    <div className=' bg-[#efefef] mx-5 my-5 md:my-15 md:mx-30 rounded-2xl sm:mx-20'>
      <Nav />
      <Content />
    </div>
  )
}

export default page
