import React/* , { useEffect } */ from 'react';
//import getUserTweets from '../helpers/getUserTweet';
import TweetCard from './TweetCard';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { changeFeed, changeUsersFallow } from '../redux/UserSlice';

export default function Tweets() {
  const { pathname }= useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myfeed = useSelector(state => state.store.feed); 
  const userTweets = useSelector(state => state.store.userTweets);
  const usersFallow = useSelector(state => state.store.usersFallow);
  const feed = pathname === '/feed' ? myfeed : userTweets;

  const handleFollow = () => {
    const newFeed = [...myfeed, ...userTweets];
    const user = {
      name: userTweets[0].name,
      userName: userTweets[0].userName,
      photo: userTweets[0].photo,
    }
    const newUserFaloow = [...usersFallow, user];
    dispatch(changeFeed(newFeed));
    dispatch(changeUsersFallow(newUserFaloow));

    navigate('/feed');
  }

  return (
    <div>
      <h2
        className='text-2xl font-bold text-[#1d9bf0] text-center
        mt-12 mb-4 border-b border-[#1d9bf0] w-[50%] m-auto'
      >tweets</h2>
      
      <div
        className='flex flex-col items-center mt-12 mb-20 shrink-0 w-[50%] m-auto'
      >
        {
          pathname === '/timeline' && (
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={ handleFollow }
            >
              Seguir Usuário
            </button>
          )
        }
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