"use client"
import React from 'react'
import { useState } from 'react'

const Nav = () => {
    const [isOpenHome, setIsOpenHome] = useState(true);
    const [isOpenPricing, setIsOpenPricing] = useState(false);
    const [isOpenAbout, setIsOpenAbout] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-row justify-between items-center ml-4 md:ml-15 sm:ml-4">
      <div className="navbar-start flex flex-row mt-5" >
        <a className="btn btn-ghost text-xl">Lando</a>
    
      <div className=" flex flex-row md:ml-20 sm:ml-6">
        <ul className="menu menu-horizontal px-1 sm:flex md:flex hidden flex-row md:gap-12 sm:gap-5">
          <li><a className={isOpenHome ?'text-[#2f63f1] cursor-pointer':' cursor-pointer'}>Home</a></li>
          <li><a className={isOpenPricing ?'text-[#2f63f1] cursor-pointer':' cursor-pointer'}>Pricing</a></li>
          <li><a className={isOpenAbout ?'text-[#2f63f1] cursor-pointer':' cursor-pointer'}>About us</a></li>
          <li><a className={isOpenContact ?'text-[#2f63f1] cursor-pointer':' cursor-pointer'}>Contact</a></li>
        </ul>
      </div>
        </div>
      <div className="navbar-end flex flex-row gap-2 md:mr-10 mt-5 sm:mr-7 mr-5">
        <button className="btn btn-sm w-15 h-7 md:w-30 md:h-12 rounded-xl cursor-pointer hover:bg-gray-300 sm:w-15 sm:h-11">Sign in</button>
        <button className="btn btn-sm w-15 h-7 bg-[#2f63f1] md:w-30 md:h-12 rounded-xl text-white cursor-pointer hover:bg-gray-500 sm:w-15 sm:h-11">Log in</button>
      </div>
    </div>
  )
}

export default Nav