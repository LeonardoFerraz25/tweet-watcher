import { House, Users } from 'phosphor-react';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <footer
      className='flex justify-around items-center bg-zinc-900 h-16 w-full fixed bottom-0'
    >
      <Link
        to='/feed'
        className='flex flex-col items-center justify-center'
      >
        {
          pathname === '/feed' ? (
            <House size={24} color="#1d9bf0" weight="fill" />
          ) : (
            <House size={24} color="#787b7d" weight="light" />
          )
        }
        <span
          className='text-white text-sm'
        >
          Feed
        </span>
      </Link>
      <Link
        to='/follows'
        className='flex flex-col items-center justify-center'
      >
        {
          pathname === '/follows' ? (
            <Users size={24} color="#1d9bf0" weight="fill" />
          ) : (
            <Users size={24} color="#787b7d" weight="light" />
          )
        }
        <span
          className='text-white text-sm'
        >
          Usuarios que você segue
        </span>
      </Link>
    </footer>
  )
}