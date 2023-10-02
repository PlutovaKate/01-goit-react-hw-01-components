import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div>
      <ul class={css.list}>
        <li class={css.item} key={id}>
          <span class={isOnline ? css.online : css.status}>{isOnline}</span>
          <img class={css.avatar} src={avatar} alt={name} width="48" />
          <p class={css.name}>{name}</p>
        </li>
      </ul>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
