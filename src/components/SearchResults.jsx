import React from 'react';
import { useSelector } from 'react-redux';
import getUserTweet from '../helpers/getUserTweet';
import { useDispatch } from 'react-redux';
import { changeIsSearching, changeUserTweets } from '../redux/UserSlice';
import { useNavigate } from "react-router-dom"

export default function SearchResults() {
  const searchUser = useSelector(state => state.store.searchUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTimeline = async (id) => {
    const timeline = await getUserTweet(id);
    const tweetsNewFormat = timeline.data.slice(0, 10).map((item) => (
      {
        name: searchUser.name,
        userName: searchUser.username, 
        photo: searchUser.profile_image_url,
        tweet: item.text,
      }
      ));
    dispatch(changeUserTweets(tweetsNewFormat));
    dispatch(changeIsSearching(false));
    navigate('/timeline');
  }

  return (
    <div
      className='flex flex-col justify-center items-center mt-6'
    >
      <h2
        className='text-2xl font-bold text-[#1d9bf0] text-center
        mt-12 mb-4 border-b border-[#1d9bf0] w-[50%] m-auto'
      >
        Users
      </h2>
      <button
        onClick={ () => getTimeline(searchUser.id) }
        className='flex items-center mt-12 mb-12 shrink-0 w-[50%] m-auto
        bg-zinc-700 rounded-lg p-4'
      >
        <div
          className='flex items-center border border-[#1d9bf0] m-6 h-18 w-18 bg-black rounded-full e outline outline-[#1d9bf0]'
        >
          <img
            className='rounded-full w-full h-full'
            src={searchUser.profile_image_url}
            alt={searchUser.name}
          />
        </div>
        <div>
          <div className='flex flex-col'>
            <h1 className='text-[#fff] font-bold text-xl'>
              {searchUser.name}
            </h1>
            <h2 className='text-[#ffffffa1] font-light text-lg'>
              {searchUser.screen_name}
            </h2>
          </div>
          <p
            className='text-[#fff] font-light text-lg'
          >
            {searchUser.description}
          </p>
        </div>
      </button>
    </div>
  );
}