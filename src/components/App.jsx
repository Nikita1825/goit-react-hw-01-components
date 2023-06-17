import { Profile } from './profile/profile';
import user from '../data/user.json';
import { Statistics } from "./statistics/statistic"
import data from "../data/data.json"
import { FriendList } from './friendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
