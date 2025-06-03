import React from 'react'
import Link from 'next/link'
const footer = () => {
  return (
    <div>
      <footer className="footer  md:footer-horizontal  p-10  flex flex-col gap-5 mx-20 md:flex-row md:gap-30 sm:ml-60 md:ml-30 mt-30 bg-[#efefef] text-black">
  <aside>
   
    <h1 className='text-2xl font-bold'>Lando</h1>
     <p>   2021 © Lando
           <br />

All rights reserved.
    </p>
  </aside>

  <nav className='flex flex-col gap-5'>
   <Link href="/"> <a className="link link-hover cursor-pointer">Home</a></Link> 
   <Link href="/pricing">  <a className="link link-hover cursor-pointer">Pricing</a></Link>
      <Link href="/about">   <a className="link link-hover cursor-pointer">About us</a></Link>
       <Link href="contact">  <a className="link link-hover cursor-pointer">Contact</a></Link>
  </nav>
    <nav className='flex flex-col gap-5'>
    <a className="link link-hover cursor-pointer">Facebook</a>
    <a className="link link-hover cursor-pointer">Instgram</a>
    <a className="link link-hover cursor-pointer">Twitter</a>
    <a className="link link-hover cursor-pointer">Linkedin</a>
  </nav>
  <nav className='flex flex-col gap-5'>
    <a className="link link-hover cursor-pointer">Privacy policy</a>
    <a className="link link-hover cursor-pointer">Terms of service</a>
  </nav>
</footer>
    </div>
  )
}

export default footer
