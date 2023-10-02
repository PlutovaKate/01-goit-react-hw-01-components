import FriendListItem from 'components/FriendListItem/FriendListItem.jsx';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </div>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      key: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
