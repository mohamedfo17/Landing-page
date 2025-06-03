import React from 'react'
import Nav from './nav'
import Content1 from './content1p1'
import Content2 from './content2p1'
 import Content3 from './content3p1'
import Content4 from './content4p1'
import Content5 from './content5p1'
import Content6 from './content6p1'
import Footer from './footer'
import Content7 from './content7'

const page = () => {
  return (
    <div className=' bg-[#efefef] mx-5 my-5 md:my-15 md:mx-30 rounded-2xl sm:mx-20'>
      <Nav page='home'/>
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Footer />
    </div>
  )
}

export default page
