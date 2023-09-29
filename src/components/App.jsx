import Users from './Users/users.jsx';
import user from '../user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Users
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics
        stats={data}
        label={data[0].label}
        percentage={data[0].percentage}
      />
    </div>
  );
};
