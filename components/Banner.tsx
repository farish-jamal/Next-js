import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

const Banner = () => {
  return (
    <div className='flex flex-col h-[28rem] items-center justify-center bg-[#fff7f5] px-6 text-center'>
      <h6 className='text-3xl sm:text-5xl font-bold text-[#120b46] mb-4'>
        Write your ideas and spread them to the world
      </h6>
      <p className='text-base sm:text-lg text-[#120b46] mb-6'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, ut!
      </p>
      <div className='flex flex-col sm:flex-row items-center w-full max-w-md space-y-3 sm:space-y-0 sm:space-x-3'>
        <Input
          className='w-full h-12 sm:h-14 rounded-md shadow-md text-base sm:text-lg px-4'
          placeholder='Enter your search...'
          aria-label='Search'
        />
        <Button className='h-12 sm:h-14 w-full sm:w-auto rounded-md shadow-md'>
          Search
        </Button>
      </div>
    </div>
  );
}

export default Banner;
