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
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  key: PropTypes.number,
};

export default FriendList;
