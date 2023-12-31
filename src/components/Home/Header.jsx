import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='px-5 flex h-16 bg-transparent shadow-md justify-between items-center'> 
      <div className="ps-20 font-semibold">Logo</div>
      <div className="space-x-5">
        <Link href="/" className='text-blue-600 font-semibold hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:pb-1  hover:transition-all hover:duration-300 hover:ease-in-out'>Home</Link>
        <Link href="/about" className='text-blue-600 font-semibold hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:pb-1 hover:transition-all hover:duration-300 hover:ease-in-out'>About</Link>
        <Link href="/gallery" className='text-blue-600 font-semibold hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:pb-1 hover:transition-all hover:duration-300 hover:ease-in-out'>Events</Link>
        <Link href="/contactus" className='text-blue-600 font-semibold hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:pb-1 hover:transition-all hover:duration-300 hover:ease-in-out'>ContactUs</Link>
      </div>
      <div className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-3 py-1 rounded-md hover:cursor-pointer">Login</div>
    </div>
  );
};

export default Header;
