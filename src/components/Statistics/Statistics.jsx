import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section class={css.statistics}>
        <h2 class={css.title}>Upload stats</h2>
        <div class={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li class={css.item} key={id}>
              <span class={css.label}>{label}</span>
              <span class={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </div>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
