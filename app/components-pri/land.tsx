import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Content4 from '../components/content7'
import Content1 from './content1'
import Content2 from './content2'
 import Content3 from './content3'
const land = () => {
  return (
    <div>
      <Nav page='pricing'/>
      <Content1 />
            <Content2 />
      <Content3 />
      <div className='justify-center items-center flex flex-col bg-[#efefef] mx-5 my-5 md:my-15 md:mx-30 sm:mx-20 '>
      <Content4 /></div>
      <Footer />      
    </div>
  )
}

export default land
