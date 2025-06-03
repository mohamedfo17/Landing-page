import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Content1 from './content1'
import Content7 from '../components/content7'

const Land = () => { 
  return (
    <div>
      <Nav page='about'/>
      <Content1 />
            <div className='justify-center items-center flex flex-col bg-[#efefef] mx-5 my-5 md:my-15 md:mx-30 sm:mx-20 '>

      <Content7 /></div>
      <Footer />
    </div>
  )
}

export default Land 