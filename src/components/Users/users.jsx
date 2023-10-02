import PropTypes from 'prop-types';
import css from './users.module.css';

const Users = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div class={css.profile}>
      <div class="description">
        <img src={avatar} alt={username} class={css.avatar} />
        <p class={css.name}>{username}</p>
        <p class={css.tag}>@{tag}</p>
        <p class={css.location}>{location}</p>
      </div>

      <ul class={css.stats}>
        <li class={css.stat}>
          <span class={css.label}>Followers: </span>
          <span class={css.quantity}>{followers}</span>
        </li>
        <li class={css.stat}>
          <span class={css.label}>Views: </span>
          <span class={css.quantity}>{views}</span>
        </li>
        <li class={css.stat}>
          <span class={css.label}>Likes: </span>
          <span class={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Users.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Users;