import { FriendListItem } from "components/friendListItem/FriendListItem";
import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
