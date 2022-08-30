import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Tweets from '../components/Tweets';
import { useSelector } from 'react-redux';
import SearchResults from '../components/SearchResults';


export default function Timeline() {
  const isSearching = useSelector(state => state.store.isSearching);

  return (
    <div>
      <Header />
      <SearchBar />
      {
        isSearching ? (
          <SearchResults />
        ) : (
          <Tweets />
        )
      }
    </div>
  );
}