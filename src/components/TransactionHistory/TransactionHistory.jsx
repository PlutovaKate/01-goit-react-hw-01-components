import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table class={css.transactionHistory}>
      <thead>
        <tr class={css.thead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody class={css.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
