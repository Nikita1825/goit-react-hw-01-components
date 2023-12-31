import css from "./transaction.module.css"
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory }>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tableRow}>
              <td className={css.tableCell}>{type}</td>
              <td className={css.tableCell}>{amount}</td>
              <td className={css.tableCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};