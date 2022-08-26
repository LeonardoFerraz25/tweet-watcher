import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Tweets from '../components/Tweets';


export default function Feed() {
  
  return (
    <div>
      <Header />
      <SearchBar />
      <Tweets />
    </div>
  );
}