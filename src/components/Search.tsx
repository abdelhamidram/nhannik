"use client";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

export default function Search() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
    };
  return (
    <>
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
    </>
  )
}
