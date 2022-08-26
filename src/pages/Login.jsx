import React from 'react';
import { singIn } from '../firebase/base';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { changeUser } from '../redux/firebaseSlice';
import { TwitterLogo } from 'phosphor-react';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logar = async () => {
    const user = await singIn();
    console.log(user);
    dispatch(changeUser(user));
    navigate('/feed');
  }

  return (
    <div
      className='flex flex-col justify-center items-center h-screen'
    >
      <h1 
        className='text-3xl font-bold text-center text-white flex items-center mb-20'
      >
        Tweet Watcher
        <TwitterLogo 
          className='ml-2'
          size={42} color="#1d9bf0" weight="fill" />
      </h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={ logar }
      >
        Logar com Twitter
      </button>
    </div>
  );
}