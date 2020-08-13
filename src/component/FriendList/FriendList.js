import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span
              className={
                friend.isOnline
                  ? [styles.status, styles.isOnline].join(' ')
                  : [styles.status, styles.isOffline].join(' ')
              }
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendList;
