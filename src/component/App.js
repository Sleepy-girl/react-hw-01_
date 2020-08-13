import React from 'react';
import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friendsData from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionData from '../data/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </>
  );
}

export default App;
