import React from 'react';
import Image from 'next/image';

export default function HeroSec() {
  return (
    <section className='flex items-center justify-between'>
      <div className='ml-28'>
        <div className='font-bold text-7xl'>
          <h1>Lead your  
          <span className='text-blue-600'> success</span>
          <p> capitalize on </p>your  
          <span className='text-blue-600'> efforts</span>.</h1>
        </div>
        <div className='mt-12 font-light text-2xl	'>
          <p>We help businesses reduce costs and increase costs income.</p>
        </div>
      </div>
      <div>
        <Image src="/meeting.jpg" alt="Meeting" width={850} height={1000}/>
      </div>
    </section>
  )
}