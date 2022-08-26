import React from 'react';
import TweetCard from './TweetCard';

export default function Tweets() {
  return (
    <div>
      <h2
        className='text-2xl font-bold text-[#1d9bf0] text-center
        mt-12 mb-4 border-b border-[#1d9bf0] w-[50%] m-auto'
      >tweets</h2>
      <div
        className='flex flex-col items-center mt-12 shrink-0 border border-red-600 w-[50%] m-auto'
      >
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
    </div>
  );
}