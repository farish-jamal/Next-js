"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex items-center justify-between px-6 md:px-32 my-4'>
      <Image src="/assets/logo.png" alt="Logo-nav" width={70} height={70} />
      <ul className='hidden md:flex items-center justify-center space-x-4'>
        <Link href=''>Home</Link>
        <Link href=''>About Us</Link>
        <Link href=''>Blog</Link>
        <Link href=''>Trending</Link>
        <Link href=''>Contact</Link>
      </ul>
      <div className='md:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>
      <div className='hidden md:flex items-center space-x-4'>
        <Link href=''>Sign in</Link>
        <Button>Get Started</Button>
      </div>
      {isMenuOpen && (
        <ul className='absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 p-4 md:hidden'>
          <Link href=''>Home</Link>
          <Link href=''>About Us</Link>
          <Link href=''>Blog</Link>
          <Link href=''>Trending</Link>
          <Link href=''>Contact</Link>
          <Link href=''>Sign in</Link>
          <Button>Get Started</Button>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
