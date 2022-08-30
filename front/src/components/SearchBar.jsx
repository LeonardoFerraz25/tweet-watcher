import { MagnifyingGlass } from 'phosphor-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserByName from '../helpers/getUserByName' ;
import { changeIsSearching, changeSearchUser } from '../redux/UserSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const thumb = useSelector(state => state.store.user.photoURL);

  const searchUser = async () => {
    const user = await getUserByName(search);
    dispatch(changeSearchUser(user.data));
    dispatch(changeIsSearching(true));
  }
  return (
    <div 
        className='flex justify-center items-center h-20 w-[70%] mobile:w-full  m-auto mt-6 relative'
      >
        <div
          className='flex items-center border left-4 border-[#1d9bf0] m-6 h-18 w-18 bg-black rounded-full desktop:absolute outline outline-[#1d9bf0]'
        >
          <img
            className='rounded-full w-full h-full'
            src={thumb}
            alt=""
          />
        </div>
        <input
          className='py-[10px] px-[52px] h-[39px] bg-zinc-700 w-[50%] mr-4 rounded-full text-[#fff] outline-none focus:border border-[#1d9bf0]'
          placeholder='Buscar no tweet watcher...'
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          onClick={ searchUser }
        >
          <MagnifyingGlass
            size={32}
            color="#fff"
            weight="light"
          />
        </button>
      </div>
  );
}