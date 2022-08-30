import { DotsThreeOutlineVertical, TwitterLogo } from 'phosphor-react';
import React from 'react';

export default function Header() {
  return (
    <header
      className='flex justify-between items-center px-4 py-3 bg-black'
    >
      <div>
        <TwitterLogo size={32} color="#1d9bf0" weight="fill" />
      </div>
      <h1
        className='text-3xl font-bold text-center text-white'
      >
        Tweet Watcher
      </h1>
      <div>
        <DotsThreeOutlineVertical size={32} color="#1d9bf0" weight="fill" />
      </div>
    </header>
  );
}