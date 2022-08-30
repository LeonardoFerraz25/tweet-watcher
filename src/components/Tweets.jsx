import React/* , { useEffect } */ from 'react';
//import getUserTweets from '../helpers/getUserTweet';
import TweetCard from './TweetCard';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Tweets() {
  const location = useLocation();
  const myfeed = useSelector(state => state.store.feed); 
  const userTweets = useSelector(state => state.store.userTweets);
  const feed = location === '/feed' ? myfeed : userTweets;  

  return (
    <div>
      <h2
        className='text-2xl font-bold text-[#1d9bf0] text-center
        mt-12 mb-4 border-b border-[#1d9bf0] w-[50%] m-auto'
      >tweets</h2>
      <div
        className='flex flex-col items-center mt-12 mb-12 shrink-0 w-[50%] m-auto'
      >
        {feed.map((item, index) => (
          <TweetCard
            key={index}
            name={item.name}
            userName={item.userName}
            photo={item.photo}
            tweets={item.tweet}
          />
        ))}
          
      </div>
    </div>
  );
}