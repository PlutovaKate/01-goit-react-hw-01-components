import Users from './Users/users.jsx';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from '../data/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Users
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
