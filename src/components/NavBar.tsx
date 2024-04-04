"use client";
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Menub from './Menub';
import MenuLinks from './MenuLinks';
import Links from './dbLinks';

export default function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <nav className='bg-white border-b border-black'>
      <div className='max-w-9xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <a href="/" className='text-black font-bold'>NK</a>
            </div>
            {isSearchOpen ? (
              <div className="w-64">
                <div className="flex items-center border-b-2 border-blue-500 py-2">
                  <input 
                    type="text" 
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    placeholder="What are you looking for?" 
                  />
                </div>
              </div>
            ) : (
              <button className='mx-2 p-2 bg-slate-100 rounded-sm' onClick={toggleSearch}>
                <CiSearch className='w-5 h-5 text-blue-600' />
              </button>
            )}
          </div>
          <div className='hidden md:block'>
            <div className=' flex items-center space-x-4'>
              {Links.map((link, index) => (<MenuLinks key={index} text={link.text} src={link.src} />))}
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center space-x-2'>
              <Menub />
              <button type="button" className="mr-1 bg-blue-600 text-white w-48 h-8 rounded">Join the waiting list</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}