import React, { useEffect }  from 'react';
/* import { useDispatch, useSelector } from 'react-redux';
import { changeFirebase } from '../redux/firebaseSlice'; */

export default function Login() {
  //const dispatch = useDispatch();
  useEffect(() => {
    const firebase = window.firebase;
    console.log(firebase);
    /* dispatch(changeFirebase(firebase)); */
  }, [])
  return (
    <div>
      <h1 
        className='text-3xl font-bold text-center text-gray-800'
      >Tweet Watcher</h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Login with Twitter
      </button>
    </div>
  );
}