import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
//import {  useSelector } from 'react-redux';

export default function SearchBar() {
  //const thumb = useSelector(state => state.store.user.user.photoURL);

  return (
    <div 
        className='flex justify-center items-center h-20 w-[70%] m-auto mt-6 relative'
      >
        <div
          className='flex items-center border left-4 border-[#1d9bf0] m-6 h-18 w-18 bg-black rounded-full absolute outline outline-[#1d9bf0]'
        >
          <img
            className='rounded-full w-full h-full'
            src=""//{thumb}
            alt=""
          />
        </div>
        <input
          className='py-[10px] px-[52px] h-[39px] bg-zinc-700 w-[50%] mr-4 rounded-full text-[#fff] outline-none focus:border border-[#1d9bf0]'
          placeholder='Buscar no tweet watcher...'
          type="text"
        />
        <button>
          <MagnifyingGlass
            size={32}
            color="#fff"
            weight="light"
          />
        </button>
      </div>
  );
}