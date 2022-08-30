import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FollowUsers from '../components/FollowUsers';

export default function Follows() {

  return (
    <div>
      <Header />
        <FollowUsers />
      <Footer />
    </div>
  );
}