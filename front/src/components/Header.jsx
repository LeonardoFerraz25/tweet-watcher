import React from 'react';
import { Link } from 'react-router-dom';
import { DotsThreeOutlineVertical, SignOut, TwitterLogo } from 'phosphor-react';
import { Popover } from '@headlessui/react'

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
      <Popover className="relative">
        <Popover.Button>
          <DotsThreeOutlineVertical size={32} color="#1d9bf0" weight="fill" />
        </Popover.Button>

        <Popover.Panel 
          className="absolute right-1 top-12 bg-black p-2 rounded">
          <div className="flex items-center">
            <Link
              to='/'
              className='text-red-700 text-bold flex items-center'
            >
              Logout
              <span
                className='ml-2'
              >
                <SignOut size={32} color="#dc2626" weight="light" />
              </span>
            </Link>
          </div>
        </Popover.Panel>
      </Popover>
        
      </div>
    </header>
  );
}