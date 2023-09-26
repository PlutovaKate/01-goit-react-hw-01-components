import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const user = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const jsxElem = (
  <div class="profile">
    <div class="description">
      <img src={user.avatar} alt={user.username} class="avatar" />
      <p class="name">{user.username}</p>
      <p class="tag">@{user.tag}</p>
      <p class="location">{user.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{user.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{user.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(jsxElem, document.querySelector('#root'));
