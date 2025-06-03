"use client"
import React from 'react'
import Link from 'next/link'

type NavProps = {
  page: 'home' | 'pricing' | 'about' | 'contact'
}

const Nav = ({ page }: NavProps) => {
  return (
    <div className="navbar shadow-sm flex flex-row justify-between items-center ml-4 md:ml-15 sm:ml-4 bg-[#efefef] text-black">
      <div className="navbar-start flex flex-row mt-5">
        <a className="btn btn-ghost text-xl">Lando</a>
        <div className="md:flex flex-row md:ml-20 sm:ml-6 hidden">
          <ul className="menu menu-horizontal px-1 flex md:flex-row md:gap-5 sm:gap-5 ">
            <li>
              <Link
                href="/"
                className={page === 'home' ? 'text-[#2f63f1] cursor-pointer' : 'cursor-pointer'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={page === 'pricing' ? 'text-[#2f63f1] cursor-pointer' : 'cursor-pointer'}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={page === 'about' ? 'text-[#2f63f1] cursor-pointer' : 'cursor-pointer'}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={page === 'contact' ? 'text-[#2f63f1] cursor-pointer' : 'cursor-pointer'}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end flex flex-row gap-2 md:mr-15 mt-5 sm:mr-7 mr-5">
        <button className="btn btn-sm w-19 h-9 bg-[#efefef] md:w-30 md:h-12 rounded-xl cursor-pointer hover:bg-gray-300 sm:w-15 sm:h-11 text-black">
          Sign in
        </button>
        <button className="btn btn-sm  w-19 h-9 bg-[#2f63f1] md:w-30 md:h-12 rounded-xl text-white cursor-pointer hover:bg-gray-500 sm:w-15 sm:h-11">
          Log in
        </button>
      </div>
    </div>
  )
}

export default Nav