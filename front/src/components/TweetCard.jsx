import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import React, { useState } from 'react';


export default function TweetCard({ name, userName, photo, tweets }) {
  const [like, setLike] = useState(false);
  return (
    <div
      className='border-b border-[#1d9bf0] pb-6 w-[80%] m-auto'
    >
       <div
        className='flex justify-start items-center h-20 mt-6 text-white'
       >
         <div
            className='flex items-center border border-[#1d9bf0] m-6  bg-black rounded-full'
          >
            <img
              className='rounded-full w-full h-full'
              src={photo}
              alt={name}
            />
          </div>
          <span
            className='text-xl font-bold'
          >
            {name}
          </span>
          <span
            className='text-gray-300 ml-2'
          >
            {`@${userName}`}
          </span>
       </div>
          <p
            className='text-sm text-white w-[90%] m-auto'
          >
            {tweets}
          </p>
          <div 
            className='flex justify-around items-center mt-4'
          >
            <span 
              className='flex items-center text-gray-300'
            >
              <ChatCircle className='mr-2' size={22} color="#787b7d" weight="light" />
            </span>
            <span
              className='flex items-center text-gray-300'
            >
              <ArrowsClockwise className='mr-2' size={22} color="#787b7d" weight="light" />
            </span>
            <button
              className='flex items-center text-gray-300'
              onClick={() => setLike(!like)}
            >
              {like ? (
                <Heart className='mr-2' size={22} color="#e0245e" weight="fill" />
              ) : (
                <Heart className='mr-2' size={22} color="#787b7d" weight="light" />
              )}
            </button>
            
          </div>
    </div>
  );
}