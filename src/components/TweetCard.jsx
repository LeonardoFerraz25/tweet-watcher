import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import React from 'react';

export default function TweetCard() {
  return (
    <div
      className='border-b border-[#1d9bf0] pb-6'
    >
       <div
        className='flex justify-start items-center h-20 mt-6 text-white '
       >
         <div
            className='flex items-center border border-[#1d9bf0] m-6  bg-black rounded-full'
          >
            <img
              className='rounded-full w-full h-full'
              src=""
              alt=""
            />
          </div>
          <span
            className='text-xl font-bold'
          >
            Ferraz
          </span>
          <span
            className='text-gray-300 ml-2'
          >
            @leoferraz
          </span>
          <span
            className='text-gray-300 ml-2'
          >
            ·
          </span>
          <span
            className=' text-gray-300 ml-2'
          >
            Aug 1
          </span>
       </div>
          <p
            className='text-sm text-white w-[90%] m-auto'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat, recusandae odio repudiandae quidem cum quas rerum. Ea dignissimos dolor, perspiciatis aliquam exercitationem placeat eius quos maxime, at vel ad!
          </p>
          <div 
            className='flex justify-around items-center mt-4'
          >
            <span 
              className='flex items-center text-gray-300'
            >
              <ChatCircle className='mr-2' size={22} color="#787b7d" weight="light" /> 2
            </span>
            <span
              className='flex items-center text-gray-300'
            >
              <ArrowsClockwise className='mr-2' size={22} color="#787b7d" weight="light" /> 10
            </span>
            <span
              className='flex items-center text-gray-300'
            >
              <Heart className='mr-2' size={22} color="#787b7d" weight="light" /> 
              5
            </span>
            
          </div>
    </div>
  );
}