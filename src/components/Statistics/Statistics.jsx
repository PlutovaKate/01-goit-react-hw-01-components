import css from './Statistics.module.css';

const Statistics = ({ id, label, percentage }) => {
  return (
    <section class={css.statistics}>
      <h2 class={css.title}>Upload stats</h2>

      <ul class={css.statList}>
        <li class={css.item}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class={css.item}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class={css.item}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class={css.item}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
