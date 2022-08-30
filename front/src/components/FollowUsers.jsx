import React from 'react';
import { useSelector } from 'react-redux';

export default function FollowUsers() {
  const usersFallow = useSelector(state => state.store.usersFallow);
  return (
    <div>
      <h2
        className='text-2xl font-bold text-[#1d9bf0] text-center
        mt-12 mb-4 border-b border-[#1d9bf0] w-[50%] m-auto'
      >Usuarios que você segue</h2>
      <div
        className='mb-20'
      >
        {usersFallow.map((item, index) => (
          <div
            key={index}
            className='flex items-center mt-12 mb-12 shrink-0 w-[50%] m-auto
            bg-zinc-700 rounded-lg p-4'
          >
            <div
              className='flex items-center border border-[#1d9bf0] m-6 h-18 w-18 bg-black rounded-full e outline outline-[#1d9bf0]'
            >
              <img
                className='rounded-full w-full h-full'
                src={item.photo}
                alt={item.name}
              />
            </div>
            <div>
              <div className='flex flex-col'>
                <h1 className='text-[#fff] font-bold text-xl'>
                  {item.name}
                </h1>
                <h2 className='text-[#ffffffa1] font-light text-lg'>
                  {item.userName}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}